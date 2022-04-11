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

  store(request, response) {
    response.json({ message: 'Store' });
  }

  update(request, response) {
    response.json({ message: 'Update' });
  }

  remove(request, response) {
    response.json({ message: 'Remove' });
  }
}

export default AppointmentController;
