const dotenv = require('dontenv').config({path: 'variables.env'});
const logger = require('./logger')

logger.info(`USER = ${process.env.USER}`)