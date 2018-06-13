const dotenv = require('dotenv').config({path: 'variables.env'});
const logger = require('./logger')

logger.info(`USER = ${process.env.USER}`)