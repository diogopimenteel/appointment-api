class AppointmentController {
  index(request, response) {
    response.json({ message: 'Index' });
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
