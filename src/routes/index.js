import express from 'express';

import AppointmentRouter from './AppointmentRouter.js';

const app = express();

app.use('/', AppointmentRouter);

export default app;
