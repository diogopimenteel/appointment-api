import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const startDatabase = () => {
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log('Database connected...');
    })
    .catch((error) => {
      console.log(`Error to connect to database: ${error}`);
    });
};

export default startDatabase;
