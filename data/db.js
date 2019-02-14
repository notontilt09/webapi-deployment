const stage = process.env.STAGE || 'development'

const knex = require('knex');

const config = require('../knexfile.js')[stage];

module.exports = knex(config);
