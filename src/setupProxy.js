// Created based on guidance in https://create-react-app.dev/docs/proxying-api-requests-in-development.
// This file is known by react-scripts and gets picked up automatically.
// In local development, it proxies requests through an express server.

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://localhost:3121',
    changeOrigin: true,
  }));
};
