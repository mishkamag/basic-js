const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const freq1 = {}; // Object to store frequency of characters in s1
  let commonCount = 0; // Counter for common characters

  // Count the frequency of characters in s1
  for (let char of s1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  // Check common characters in s2
  for (let char of s2) {
    if (freq1[char] && freq1[char] > 0) {
      commonCount++;
      freq1[char]--; // Decrement the count of the character
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
