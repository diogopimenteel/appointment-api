import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';
import './database/connection.js';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(routes);

app.listen(PORT || 4000, () => {
  console.log(`Server running at PORT ${PORT}`);
});

export default app;
