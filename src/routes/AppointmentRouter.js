import express from 'express';

import AppointmentController from '../controllers/AppointmentController.js';

const router = express.Router();
const appointmentController = new AppointmentController();

router.get('/api/appointment', appointmentController.index);

router.post('/api/appointment', appointmentController.store);

router.put('/api/appointment/:id', appointmentController.update);

router.delete('/api/appointment/:id', appointmentController.remove);

export default router;
