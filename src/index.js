import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import AppointmentRouter from './routes/AppointmentRouter.js';

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(AppointmentRouter);

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
