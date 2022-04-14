import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => {
    console.log(`Error to connect to database: ${error}`);
  });

const database = mongoose.connection;

export default database;
