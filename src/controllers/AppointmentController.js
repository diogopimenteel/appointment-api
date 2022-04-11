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

  update(request, response) {
    response.json({ message: 'Update' });
  }

  remove(request, response) {
    response.json({ message: 'Remove' });
  }
}

export default AppointmentController;
