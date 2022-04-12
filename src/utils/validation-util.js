export function verifyTimeWithinRange(date) {
  return date.getHours() >= 6 && date.getHours() <= 18;
}

export function verifyRoundTime(date) {
  return date.getMinutes() === 0 && date.getSeconds() === 0;
}
