import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom/server';
import childProcess from 'child_process';
import path from 'path';
import fs from 'fs';
import uuid from 'uuid';
import aws from 'aws-sdk';
import Hello from './components/Hello';

dotenv.load();
const s3Adapter = new aws.S3();

const S3_BUCKET = process.env.S3_BUCKET || 'pdf-export-bucket';
const S3_BASEURL = process.env.S3_BASEURL || 's3-us-west-2.amazonaws.com';

const createKey = filepath => `${filepath.split('/')[1]}-${uuid.v4()}.pdf`;
const getS3Url = key => `https://${S3_BASEURL}/${S3_BUCKET}/${key}`;

const uploadToS3 = ({ filepath, data }) => new Promise((resolve, reject) => {
  const key = createKey(filepath);
  console.log('pdfreactor::uploading to s3');

  s3Adapter.putObject({
    Bucket: S3_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: data,
    ContentEncoding: 'application/pdf',
  }, (err, result) => {
    if (err) {
      console.log('pdfreactor::upload error', JSON.stringify(err));
      reject(err);
    } else {
      console.log('pdfreactor::upload success');
      resolve({ key, url: getS3Url(key), result });
    }
  });
});

const readPdf = (filepath) => new Promise((resolve, reject) => {
  console.log('pdfreactor::reading', filepath);
  fs.readFile(filepath, (err, data) => {
    if (err) { reject(err); }
    else { resolve({ filepath, data }); }
  });
});

const writeFile = (filepath, contents) => new Promise((resolve, reject) => {
  console.log('pdfreactor::writing', filepath);
  fs.writeFile(filepath, contents, err => {
    if (err) {
      reject(err);
    } else {
      resolve(filepath);
    }
  });
});

const createPdf = (filepath) => {
  process.env.PATH = `${process.env.PATH}:${process.env.LAMBDA_TASK_ROOT}`;
  const phantomBin = 'phantomjs';
  const phantomPath = path.join('bin', phantomBin);
  const args = [path.join('createPdf.js'), filepath];

  console.log('pdfreactor::creating_pdf');
  return new Promise((resolve, reject) => {
    childProcess.execFile(phantomPath, args, (err, stdout, stderr) => {
      console.log('pdfreactor::started_phantom');
      if (err || stderr) {
        reject({
          statusCode: 500,
          body: err || stderr,
        });
      } else {
        resolve(stdout);
      }
    });
  });
};

export const hello = (event, context, callback) => {
  const html = ReactDOM.renderToString(<Hello event={event.body}/>);
  const outputPath = '/tmp/hello.html';
  writeFile(outputPath, html)
    .then(createPdf)
    .then(readPdf)
    .then(uploadToS3)
    .then(pdf => callback(null, { statusCode: 200, body: pdf }))
    .catch(e => callback(null, { statusCode: 500, body: e }));

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
