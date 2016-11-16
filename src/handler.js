import 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom/server';
import childProcess from 'child_process';
import path from 'path';
import fs from 'fs';
import Hello from './components/Hello';

const readPdf = (filepath) => new Promise((resolve, reject) => {
  fs.readFile(filepath, (err, data) => {
    if (err) { reject(err); }
    else { resolve(data); }
  });
});

const writeFile = (filepath, contents) => new Promise((resolve, reject) => {
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
  const phantomPath = path.join(__dirname, 'bin', 'phantomjs');
  const args = [path.join(__dirname, 'createPdf.js', filepath)];
  return new Promise((resolve, reject) => {
    childProcess.execFile(phantomPath, args, (err, stdout, stderr) => {
      if (err || stderr) {
        reject({
          statusCode: 500,
          body: err || stderr,
        });
      } else {
        resolve({
          statusCode: 200,
          body: stdout,
        });
      }
    });
  });
};

export const hello = (event, context, callback) => {
  const html = ReactDOM.renderToString(<Hello event={event}/>);
  const outputPath = path.join(__dirname, 'static', 'hello.html');
  writeFile(outputPath, html)
    .then(createPdf)
    .then(readPdf)
    .then(pdf => callback(null, { statusCode: 200, pdf }))
    .catch(e => callback(null, e));

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
