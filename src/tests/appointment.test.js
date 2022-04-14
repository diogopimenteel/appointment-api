/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
import request from 'supertest';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from '../app.js';
import database from '../database/connection.js';

dotenv.config();

const { DATABASE_TEST_URL } = process.env;

describe('Appointment tests', () => {
  beforeAll(async () => {
    await database.close();
    await mongoose.connect(DATABASE_TEST_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  test('Should be able to list all appointments', async () => {
    const response = await request(app).get('/appointment');

    expect(response.status).toBe(200);
  });

  test('Should be able to create a new appointment', async () => {
    const response = await request(app)
      .post('/appointment')
      .send({
        name: 'John Doe',
        birthday: '1990,11,17',
        selectedDate: '2022-06-02T06:00:00',
      });

    expect(response.status).toBe(200);
  });

  test('Should not be able to create a new appointment without name', async () => {
    const response = await request(app).post('/appointment').send({
      birthday: '1990,11,17',
      selectedDate: '2022-06-02T06:00:00',
    });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment with invalid name', async () => {
    const response = await request(app).post('/appointment').send({
      name: 'John Doe32',
      birthday: '1990,11,17',
      selectedDate: '2022-06-02T06:00:00',
    });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment without birthday', async () => {
    const response = await request(app).post('/appointment').send({
      name: 'John Doe',
      selectedDate: '2022-06-02T06:00:00',
    });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment with invalid birthday', async () => {
    const response = await request(app).post('/appointment').send({
      name: 'John Doe',
      birthday: '2030,11,17',
      selectedDate: '2022-06-02T06:00:00',
    });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment without selectedDate', async () => {
    const response = await request(app).post('/appointment').send({
      name: 'John Doe',
      birthday: '1990,11,17',
    });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment wit invalid selectedDate', async () => {
    const response = await request(app).post('/appointment').send({
      name: 'John Doe',
      birthday: '1990,11,17',
      selectedDate: '1990,11,17',
    });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment with a invalid hour in selected date', async () => {
    const response = await request(app)
      .post('/appointment')
      .send({
        name: 'John Doe',
        birthday: '1990,11,17',
        selectedDate: '2022-06-02T03:30:00',
      });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment with a invalid minutes in selected date', async () => {
    const response = await request(app)
      .post('/appointment')
      .send({
        name: 'John Doe',
        birthday: '1990,11,17',
        selectedDate: '2022-06-19T06:30:00',
      });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create a new appointment with a invalid seconds in selected date', async () => {
    const response = await request(app)
      .post('/appointment')
      .send({
        name: 'John Doe',
        birthday: '1990,11,17',
        selectedDate: '2022-06-19T06:00:30',
      });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create more than two appointments in the same selected date', async () => {
    await request(app)
      .post('/appointment')
      .send({
        name: 'John Doe',
        birthday: '1990,11,17',
        selectedDate: '2022-06-02T06:00:00',
      });

    await request(app)
      .post('/appointment')
      .send({
        name: 'James Blue',
        birthday: '1991,04,10',
        selectedDate: '2022-06-02T06:00:00',
      });

    const response = await request(app)
      .post('/appointment')
      .send({
        name: 'Frank Green',
        birthday: '1987,03,12',
        selectedDate: '2022-06-02T06:00:00',
      });
    expect(response.status).toBe(400);
  });

  test('Should not be able to create more than twenty appointments in the same day', async () => {
    for (let i = 0; i < 10; i++) {
      const appointment = `2022-06-02T0${6 + i}:00:00`;
      await request(app)
        .post('/appointment')
        .send({
          name: 'John Doe',
          birthday: '1990,11,17',
          selectedDate: appointment,
        });

      await request(app)
        .post('/appointment')
        .send({
          name: 'James Blue',
          birthday: '1991,04,17',
          selectedDate: appointment,
        });
    }

    const response = await request(app)
      .post('/appointment')
      .send({
        name: 'Frank Green',
        birthday: '1987,03,12',
        selectedDate: '2022-06-02T0$17:00:00',
      });

    expect(response.status).toBe(400);
  });
});
