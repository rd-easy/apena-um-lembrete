import express from 'express';

import './database';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () =>
  console.log('Server is running http://127.0.0.1:3333'),
);