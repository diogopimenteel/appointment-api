import mongoose from 'mongoose';

const appointment = {
  name: { type: String, required: true },
  birthday: { type: Date, required: true },
  selectedDate: { type: Date, required: true },
  attended: { type: Boolean, default: false },
};

const AppointmentSchema = new mongoose.Schema(appointment, { timestamps: true });

const AppointmentModel = mongoose.model('appointment', AppointmentSchema);

export default AppointmentModel;
