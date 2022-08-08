const log4js = require("log4js");

const LOGLevels = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL,
};

log4js.configure({
  appenders: {
    CONSOLE: { type: "console" },
    INFO: { type: "file", filename: "logs/info-log.log" },
    ERROR: {
      type: "file",
      filename: "logs/error-log",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: { appenders: ["CONSOLE"], level: LOGLevels.debug },
    info: { appenders: ["INFO", "CONSOLE"], level: LOGLevels.info },
    error: { appenders: ["ERROR"], level: LOGLevels.error },
  },
});

exports.debug = (content) => {
  const logger = log4js.getLogger();
  logger.debug(content);
};

exports.info = (content) => {
  const logger = log4js.getLogger("info");
  logger.info(content);
};

exports.error = (content) => {
  const logger = log4js.getLogger("error");
  logger.error(content);
};
