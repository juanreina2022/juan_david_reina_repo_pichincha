// Config
import app from './app';

// Const
const port = 3000;

app.listen(port, async () => {
  // tslint:disable-next-line: no-console
  console.log(`App is running in ${port} port.`);
});