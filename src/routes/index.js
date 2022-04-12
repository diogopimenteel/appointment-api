import express from 'express';

import appointmentRouter from './appointment-router.js';

const app = express();

app.use('/appointment', appointmentRouter);

export default app;
