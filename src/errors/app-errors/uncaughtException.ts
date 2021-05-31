process.on('uncaughtException', (err) => {
  console.log( " UNCAUGHT EXCEPTION " );
  console.log( `[Inside 'uncaughtException' event] ${  err.stack}` || err.message );
});