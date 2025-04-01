/**
 * Utility functions for date manipulation.
 */

/**
 * Converts a Date object to an ISO8601 string with the correct timezone.
 * @param {Date} date - The date to convert.
 * @returns {string} The ISO8601 string with the correct timezone.
 */
export function convertDateToISO8601WithTimezone(date: Date): string {
  const timezoneOffset = -date.getTimezoneOffset();
  const sign = timezoneOffset >= 0 ? '+' : '-';
  const pad = (num: number) => (num < 10 ? '0' : '') + Math.floor(Math.abs(num));
  const isoString = date.toISOString().split('.')[0];
  const timezone = `${sign}${pad(timezoneOffset / 60)}:${pad(timezoneOffset % 60)}`;
  return `${isoString}${timezone}`;
}
