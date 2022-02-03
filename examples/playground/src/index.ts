import express from 'express';
import {routes} from './routes';
import {swaggerDocs} from './swagger';

const port = 3000;

const app = express();

app.use(express.json());

app.listen(port, async () => {
  const host = `http://localhost:${port}`;
  console.info(`App is running at ${host}`);
  routes(app);
  swaggerDocs(app, host);
});
