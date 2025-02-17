// Vercel handler for the API

const app = require('../src/index');  // Express app

module.exports = (req, res) => {
  // Vercel Serverless Functions and connect to Express app
  return app(req, res);
};

module.exports = app;