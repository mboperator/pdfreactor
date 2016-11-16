import 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom/server';

import Hello from './components/Hello';

export const hello = (event, context, callback) => {
  // Create HTML string with React Component script in head
  const html = ReactDOM.renderToString(<Hello event={event}/>);
  // Render HTML with Phantom

  // Render PDF

  const response = {
    statusCode: 200,
    body:  ReactDOM.renderToString(<Hello event={event}/>),
  };
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
