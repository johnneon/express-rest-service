import { writeFileSync } from 'fs';
import { config } from '../common/config';
import { winston } from "../common/logging";

const { LOG_DIRECTORY } = config;

/** Function that handling and write logs when unhandledRejection & uncaughtException
 * @function
 * @param {VoidFunction} callback - Callback that call when hang up handler
 * @returns {void}
 */
export const appErrorsHandler = (callback: VoidFunction): void => {
  process
    .on('unhandledRejection', (err) => {
      winston.error(`Unhandled Rejection at Promise \n ${err} \n exit with status 1`);
      writeFileSync(
        `${LOG_DIRECTORY}/uncaughtErrors.log`,
        JSON.stringify({message: err, level: "error"}),
        { flag: 'a+' },
      );
      process.exit(1);
    })
    .on('uncaughtException', (err) => {
      winston.error(`Uncaught Exception thrown \n ${err} \n exit with status 1`);
      writeFileSync(
        `${LOG_DIRECTORY}/uncaughtErrors.log`,
        JSON.stringify({message: err, level: "error"}),
        { flag: 'a+' },
      );
      process.exit(1);
    });

    callback();
  };
  
