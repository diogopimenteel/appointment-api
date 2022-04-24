import dotenv from 'dotenv';

dotenv.config();

const START_HOUR = 6;
const END_HOUR = 18;
const ZERO = 0;

export function verifyTimeWithinRange(date) {
  return date.getHours() >= +START_HOUR && date.getHours() <= +END_HOUR;
}

export function verifyRoundTime(date) {
  return date.getMinutes() === +ZERO && date.getSeconds() === +ZERO;
}
