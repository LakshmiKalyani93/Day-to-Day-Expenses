'use strict';
const env = process.env.NODE_ENV || 'local';
const config = require(`../../config/config.${env}.json`);
const path = require('path');
const fs = require('fs');
const winston = require('winston');
const moment = require('moment');
const CustomLevels = {
  levels: {
    ERROR: 4,
    WARN: 3,
    INFO: 2,
    DEBUG: 1,
    TRACE: 0,
  },
  colors: {
    TRACE: 'blue',
    DEBUG: 'blue',
    INFO: 'green',
    WARN: 'yellow',
    ERROR: 'red',
  },
};

let logDir = process.env.CIM_LOG_DIR;
if (!logDir) {
  logDir = path.join(__dirname, '../../', config.logger.LOGDIR);
}
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFile = process.env.CIM_LOG_FILE || config.logger.LOGFILE;

let logLevel;
if (!!process.env.CIM_LOG_LEVEL) {
  const lvls = [];
  const lv2lower = (process.env.CIM_LOG_LEVEL).toUpperCase();

  Object.keys(CustomLevels.levels).forEach((cl) => {
    lvls.push(cl);
  });

  if (lvls.indexOf(lv2lower) > -1) {
    logLevel = lv2lower;
  }
} else {
  logLevel = (config.logger.LEVEL).toUpperCase();
}

let logOffset = 330;
if (!!config.logger.offset) {
  logOffset = config.logger.offset;
}

const logger = new winston.Logger({
  levels: CustomLevels.levels,
  transports: [
    new winston.transports.File({
      level: logLevel,
      filename: path.join(`${logDir}/${logFile}`),
      handleExceptions: false,
      humanReadableUnhandledException: false,
      json: false,
      maxsize: config.logger.MAXSIZE,
      maxFiles: config.logger.MAXFILES,
      colorize: false,
      timestamp: function() {
        return moment().utcOffset(logOffset).format('YYYY-MM-DD HH:mm:ss,SSS');
      },
      formatter: function(options) {
        // Return string will be passed to logger.
        return `${options.timestamp()} ${options.level.toUpperCase()}
         ${options.message ? options.message : ''}
         ${options.meta && Object.keys(options.meta).length ? `\n\t
         ${JSON.stringify(options.meta)}` : ''}`;
      },
    }),
  ],
});

module.exports = logger;
