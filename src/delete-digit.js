const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString(); // Convert the number to a string
  let maxNum = 0; // Initialize the maximum number

  // Iterate through each digit of the number
  for (let i = 0; i < numStr.length; i++) {
    // Remove the digit at index i and concatenate the remaining digits
    const currentNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
    // Update the maximum number if the current number is greater
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit,
};
