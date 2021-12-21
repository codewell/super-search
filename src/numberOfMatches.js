/**
 *
 */
const matchReducer = (stringifiedObject) => (hits, word) => {
  if (stringifiedObject.indexOf(word) !== -1) {
    return hits + 1;
  }
  return hits;
};

/**
 * Count number of matching words in a string
 * @param {[string]} words - words to find
 * @param {string} stringifiedObject - All object values as a squashed string
 * @returns {number} - Number of matching words
 */
export const numberOfMatches = (words, stringifiedObject) =>
  words.reduce(matchReducer(stringifiedObject), 0);
