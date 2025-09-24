// utils.js

// Character pool: alphabets, digits, special characters
const CHAR_POOL = [
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."0123456789",
  ..."!@#$%^&*()-_=+{}[];:'\"<>,.?/\\|",
];

/**
 * Generate random words from pool
 * @param {number} count - Number of words to generate
 * @returns {string[]} - Array of words
 */
export function generateWords(count) {
  const words = [];
  for (let i = 0; i < count; i++) {
    const wordLength = Math.floor(Math.random() * 8) + 2; // word length 2–10
    let word = "";
    for (let j = 0; j < wordLength; j++) {
      const randomChar =
        CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)];
      word += randomChar;
    }
    words.push(word);
  }
  return words;
}

/**
 * Calculate Words Per Minute
 * Formula: (characters / 5) / minutes
 * @param {number} chars - Total characters typed
 * @param {number} elapsedTime - Time in seconds
 * @returns {number}
 */
export function calculateWPM(chars, elapsedTime) {
  if (elapsedTime === 0) return 0;
  const minutes = elapsedTime / 60;
  return Math.round(chars / 5 / minutes);
}

/**
 * Calculate Words Per Hour
 * @param {number} wpm
 * @returns {number}
 */
export function calculateWPH(wpm) {
  return wpm * 60;
}

/**
 * Calculate Words Per Second
 * @param {number} wpm
 * @returns {number}
 */
export function calculateWPS(wpm) {
  return (wpm / 60).toFixed(2);
}

/**
 * Calculate Accuracy %
 * @param {number} correct - Correct characters typed
 * @param {number} total - Total characters typed
 * @returns {number}
 */
export function calculateAccuracy(correct, total) {
  if (total === 0) return 0;
  return ((correct / total) * 100).toFixed(2);
}
