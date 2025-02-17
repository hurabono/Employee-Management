// Vercel handler for the API

const app = require('../index');  // Express app

module.exports = (req, res) => {
  // Vercel Serverless Functions and connect to Express app
  return app(req, res);
};
