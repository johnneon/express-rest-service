import { winston } from "../common/logging";

/** Function that handling and write logs when unhandledRejection & uncaughtException
 * @function
 * @param {VoidFunction} callback - Callback that call when hang up handler
 * @returns {void}
 */
export const appErrorsHandler = (callback: VoidFunction): void => {
  process
    .on('unhandledRejection', (reason, p) => {
      winston.error(`Unhandled Rejection at Promise \n ${reason} \n ${p}`);
    })
    .on('uncaughtException', (err) => {
      winston.error(`Uncaught Exception thrown \n ${err} \n exit with status 1`);
      process.exit(1);
    });

  callback();
};
