import { Request } from 'express';
import morgan from 'morgan';
import { format, createLogger, transports } from 'winston';
import { config } from './config';

morgan.token('body', (req: Request) => JSON.stringify(req.body));
morgan.token('params', (req: Request) => JSON.stringify(req.params));

const { LOG_DIRECTORY } = config;
const { File, Console } = transports;
const {
  combine,
  timestamp,
  prettyPrint,
  colorize,
  cli,
} = format;


const customFormat = combine(timestamp(), prettyPrint());

const options = {
  fileUnhandled: {
    customFormat,
    level: 'error',
    filename: `${LOG_DIRECTORY}/exceptions.log`,
    json: true,
    maxsize: 1024 * 5000,
    maxFiles: 5,
    colorize: false
  },
  fileError: {
    customFormat,
    level: 'error',
    filename: `${LOG_DIRECTORY}/errors.log`,
    json: true,
    maxsize: 1024 * 5000,
    maxFiles: 5,
    colorize: false
  },
  fileInfo: {
    customFormat,
    level: 'info',
    filename: `${LOG_DIRECTORY}/app.log`,
    json: true,
    maxsize: 1024 * 5000,
    maxFiles: 5,
    colorize: false
  },
  console: {
    format: combine(colorize(), cli()),
  }
};

const winston = createLogger({
  transports: [
    new File(options.fileError),
    new File(options.fileInfo),
    new Console(options.console),
  ],
  exceptionHandlers: [new File(options.fileUnhandled)]
});

winston.stream = (message) => winston.info(message);

const logger = morgan(
  ':method :status :url \n Body: :body \n Query params: :params \n :response-time ms',
  { stream: { write: winston.stream } }
);

export { logger, winston };
