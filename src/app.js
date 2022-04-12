import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes';
import startDatabase from './database/connection.js';

const app = express();
const { PORT } = process.env;

startDatabase();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(routes);

app.listen(PORT || 4000, () => {
  console.log(`Server running at PORT ${PORT}`);
});
