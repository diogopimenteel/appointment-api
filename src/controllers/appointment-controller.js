import mongoose from 'mongoose';
import AppointmentModel from '../models/appointment-model.js';

class AppointmentController {
  async index(request, response) {
    try {
      const appointments = await AppointmentModel.find();

      response.json(appointments.length === 0 ? { message: 'Empty list' } : { data: appointments });
    } catch ({ message }) {
      console.log(message);
      response.status(400).json({ message: 'Something wrong happened...' });
    }
  }

  async store(request, response) {
    const { body } = request;

    try {
      const appointment = await AppointmentModel.create(body);

      response.json({
        message: 'Appointment created successfully',
        data: appointment,
      });
    } catch ({ message }) {
      console.log(message);
      response.status(400).json({ message: 'Something wrong happened...' });
    }
  }

  async getOne(request, response) {
    const { id } = request.params;
    if (mongoose.Types.ObjectId.isValid(id)) {
      try {
        const appointment = await AppointmentModel.findById(id);

        if (!appointment) {
          return response.status(404).json({ message: 'Appointment not found!' });
        }

        return response.json({ message: 'Appointment founded', data: appointment });
      } catch ({ message }) {
        console.log(message);
        return response.status(400).send({ message: 'Something wrong happened...' });
      }
    }
    response.status(400).json({ message: 'Invalid id!' });
  }

  async update(request, response) {
    const {
      body,
      params: { id },
    } = request;

    if (mongoose.Types.ObjectId.isValid(id)) {
      try {
        const appointment = await AppointmentModel.findByIdAndUpdate(id, body, { new: true });

        if (!appointment) {
          return response.status(404).json({ message: 'Appointment not found!' });
        }

        return response.json({ message: 'Appointment updated successfully', data: appointment });
      } catch ({ message }) {
        console.log(message);
        return response.status(400).send({ message: 'Something wrong happened...' });
      }
    }
    response.status(400).json({ message: 'Invalid id!' });
  }

  async remove(request, response) {
    const { id } = request.params;

    if (mongoose.Types.ObjectId.isValid(id)) {
      try {
        const appointment = await AppointmentModel.findById(id);

        if (!appointment) {
          return response.status(404).json({ message: 'Appointment not found!' });
        }

        await appointment.remove();

        response.json({ message: 'Appointment removed' });
      } catch ({ message }) {
        console.log(message);
        response.status(400).json({ message: 'Something wrong happened...' });
      }
    }
    response.status(400).json({ message: 'Invalid id!' });
  }
}

export default AppointmentController;
