import app from './app';
// import { config } from './common/config.js';


// const { PORT } = config;

app.listen(4000, () =>
  console.log(`App is running on http://localhost:${4000}`)
);
