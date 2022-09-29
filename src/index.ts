// Config
import app from './app';

// Config Vars
import * as config from '../configVars';

app.listen(config.PORT, async () => {
  // tslint:disable-next-line: no-console
  console.log(`App is running in ${config.PORT} port in ${config.NODE_ENV} environment.`);
});
