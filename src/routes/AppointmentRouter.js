import express from 'express';

import AppointmentController from '../controllers/AppointmentController.js';
import InputValidation from '../validations/InputValidation.js';
import validateBusinessLogic from '../validations/RulesValidation.js';
import validation from '../validations/ValidationMiddleware.js';

const router = express.Router();
const appointmentController = new AppointmentController();

router.get('/api/appointment', appointmentController.index);

router.post('/api/appointment', validation(InputValidation), validateBusinessLogic, appointmentController.store);

router.put('/api/appointment/:id', validation(InputValidation), validateBusinessLogic, appointmentController.update);

router.delete('/api/appointment/:id', appointmentController.remove);

export default router;
