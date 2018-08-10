require('dotenv').config();
import winston from 'winston';


// create transports
const transports = [
    new winston.transports.File({
        level: process.env.log_level,
        filename: process.env.log_file
    }),
    new winston.transports.Console({
        level: process.env.log_level,
        colorize: true
    })
];

// setup format
const myFormat = winston.format.printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
  });

// TODO: Look into winston-mail

const logger = winston.createLogger({
    transports: transports,
    format: winston.format.combine(
        winston.format.timestamp(),
        myFormat
    )
});

logger.info('Logger has been created');

export default logger;