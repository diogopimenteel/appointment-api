import AppointmentModel from '../models/AppointmentModel.js';
import { verifyTimeWithinRange, verifyRoundTime } from '../utils/validation-util.js';

const validateBusinessLogic = async (request, response, next) => {
  const date = new Date(request.body.selectedDate);

  if (!verifyTimeWithinRange(date)) {
    return response
      .status(400)
      .json({ message: 'It will only be possible to schedule from 6 AM to 6 PM' });
  }

  if (!verifyRoundTime(date)) {
    return response
      .status(400)
      .json({ message: 'It will only be possible to schedule using rounded times' });
  }

  const firstDate = new Date(date);

  firstDate.setHours(0);
  firstDate.setMinutes(0);

  const secondDate = new Date(firstDate);

  secondDate.setDate(secondDate.getDate() + 1);

  const appointmentsToday = await AppointmentModel.find({
    selectedDate: {
      $gte: new Date(firstDate),
      $lte: new Date(secondDate),
    },
  });

  if (appointmentsToday.length > 19) {
    return response
      .status(400)
      .json({ message: 'This day is no longer available' });
  }

  const appointmentsInSelectedHour = await AppointmentModel.find({
    selectedDate: date,
  });

  if (appointmentsInSelectedHour.length === 2) {
    return response
      .status(400)
      .json({ message: 'The schedule is full' });
  }

  next();
};

export default validateBusinessLogic;
