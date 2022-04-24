import dotenv from 'dotenv';

dotenv.config();

const { START_HOUR, END_HOUR, ZERO } = process.env;

export function verifyTimeWithinRange(date) {
  return date.getHours() >= +START_HOUR && date.getHours() <= +END_HOUR;
}

export function verifyRoundTime(date) {
  return date.getMinutes() === +ZERO && date.getSeconds() === +ZERO;
}
