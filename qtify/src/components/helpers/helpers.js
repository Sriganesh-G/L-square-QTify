// src/helpers/helpers.js

/**
 * Truncates a string to a specified length, adding ellipsis (...) if it exceeds the limit.
 * @param {string} str - The string to truncate.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} - The truncated string.
 */
export function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}
