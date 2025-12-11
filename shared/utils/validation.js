/**
 * Validates an email address format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a required field
 * @param {*} value - Value to check
 * @returns {boolean} - True if value is not empty
 */
function validateRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  return true;
}

/**
 * Validates string length
 * @param {string} value - String to validate
 * @param {number} min - Minimum length
 * @param {number} max - Maximum length
 * @returns {boolean} - True if length is within range
 */
function validateLength(value, min, max) {
  if (typeof value !== 'string') return false;
  const length = value.trim().length;
  return length >= min && length <= max;
}

module.exports = {
  validateEmail,
  validateRequired,
  validateLength,
};
