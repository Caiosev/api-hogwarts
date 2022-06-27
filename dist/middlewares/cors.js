"use strict";const cors = require('cors');

const corsOptions = {
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'authorization'],
  origin: '*',
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
