const cors = require('cors');

const corsOptions = {
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
