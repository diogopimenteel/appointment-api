import express from 'express';

import AppointmentController from '../controllers/appointment-controller.js';
import inputValidation from '../validations/input-validation.js';
import validateBusinessLogic from '../validations/rules-validation.js';
import validation from '../validations/validation-middleware.js';

const router = express.Router();
const appointmentController = new AppointmentController();

router.get('/', appointmentController.index);

router.post('/', validation(inputValidation), validateBusinessLogic, appointmentController.store);

router.put('/:id', validation(inputValidation), validateBusinessLogic, appointmentController.update);

router.delete('/:id', appointmentController.remove);

export default router;
