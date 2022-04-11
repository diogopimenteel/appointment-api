import AppointmentModel from '../models/AppointmentModel.js';

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

  async update(request, response) {
    const {
      body,
      params: { id },
    } = request;

    try {
      const appointment = await AppointmentModel.findByIdAndUpdate(id, body, { new: true });

      return response.json({ message: 'Appointment updated successfully', data: appointment });
    } catch ({ message }) {
      console.log(message);
      return response.status(400).send({ message: 'Something wrong happened...' });
    }
  }

  async remove(request, response) {
    const { id } = request.params;

    try {
      const appointment = await AppointmentModel.findById(id);

      await appointment.remove();

      response.json({ message: 'Appointment removed' });
    } catch ({ message }) {
      console.log(message);
      response.status(400).json({ message: 'Something went wrong' });
    }
  }
}

export default AppointmentController;
