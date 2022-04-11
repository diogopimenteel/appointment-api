import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    birthday: { type: Date, required: true },
    selectedDate: { type: Date, required: true },
    attended: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const AppointmentModel = new mongoose.model('appointment', AppointmentSchema);

export default AppointmentModel;
