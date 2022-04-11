import express from 'express';

import AppointmentController from '../controllers/AppointmentController.js';
import AppointmentValidation from '../validations/AppointmentValidation.js';
import validation from '../validations/ValidationMiddleware.js';

const router = express.Router();
const appointmentController = new AppointmentController();

router.get('/api/appointment', appointmentController.index);

router.post('/api/appointment', validation(AppointmentValidation), appointmentController.store);

router.put('/api/appointment/:id', validation(AppointmentValidation), appointmentController.update);

router.delete('/api/appointment/:id', appointmentController.remove);

export default router;
