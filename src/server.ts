import app from './app';
import { config } from './common/config';
import { winston } from './common/logging';
import { appErrorsHandler } from './errors/appErrorsHandling';

const { PORT } = config;

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
  
  /**
   * Hang up error handling
   */
  appErrorsHandler(() => winston.info('Listening uncaughtException & unhandledRejection'));
});
