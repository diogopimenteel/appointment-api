import mongoose from 'mongoose';

const { DATABASE_URL } = process.env;

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => {
    console.log(`Error to connect to database: ${error}`);
  });
