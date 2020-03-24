const knex = require('knex')
const config = require('../../knexfile')

const connectToDb = knex(config.development)
module.exports = connectToDb