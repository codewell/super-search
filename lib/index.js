'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const replaceString = (string, pattern, replacement) =>
  string.replace(new RegExp(pattern, "g"), replacement);

const removeChar = (string, char) => replaceString(string, char, "");

const toLowercase = (string) => string.toLowerCase();

const resolveSearchWords = (searchString) =>
  searchString.split(" ").filter((s) => s !== "");

const resolveCompareString = ({ ignore, caseSensitive }) => (string) => {
  if (caseSensitive) {
    return ignore.reduce(removeChar, string);
  }
  return toLowercase(ignore.reduce(removeChar, string));
};

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
const numberOfMatches = (words, stringifiedObject) =>
  words.reduce(matchReducer(stringifiedObject), 0);

const defaultOptions = {
  ignore: [],
  caseSensitive: false,
};

/**
 * Super text serach function for JSON objects.
 * Make everything into a string with no spaces
 * and search for any occurance.
 */
const superSearch = (options = defaultOptions) => (
  searchString,
  searchObject
) => {
  const resolvedOptions = {
    ...defaultOptions,
    ...options,
  };

  const stringifiedObject = resolveCompareString(resolvedOptions)(
    JSON.stringify(searchObject)
  );

  return {
    fullMatch:
      stringifiedObject.indexOf(
        resolveCompareString(resolvedOptions)(searchString)
      ) !== -1,
    numberOfMatches: numberOfMatches(
      resolveSearchWords(searchString),
      stringifiedObject
    ),
  };
};

exports.removeChar = removeChar;
exports.replaceString = replaceString;
exports.superSearch = superSearch;
