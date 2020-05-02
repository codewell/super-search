"use strict";

var squashString = require("./squashString");
/**
 *
 * @param {*} obj
 */

var stringifyObject = (obj) => {
  var objectString = JSON.stringify(obj);
  return squashString(objectString);
};

/**
 * Count number of matching words in a string
 * @param {[string]} words - words to find
 * @param {string} stringifiedObject - All object values as a squashed string
 * @returns {number} - Number of matching words
 */
var numberOfMatches = (words, stringifiedObject) => {
  return words.reduce((hits, word) => {
    if (stringifiedObject.indexOf(word) !== -1) {
      return hits + 1;
    }

    return hits;
  }, 0);
};

/**
 * Remove all whitespaces in a string and make lowercase
 * @param {*} searchString
 * @returns {string}
 */
var squashString$1 = (searchString) =>
  searchString.replace(/\s+/g, " ").toLowerCase();

/**
 * Super text serach function for JSON objects.
 * Make everything into a string with no spaces
 * and search for any occurance.
 */

var superSearch = (searchString, searchObject) => {
  // Look for all the words one by one
  var words = searchString.split(" ");
  var stringifiedObject = stringifyObject(searchObject);
  var fullMatch =
    stringifiedObject.indexOf(squashString$1(searchString)) !== -1;
  return {
    fullMatch,
    numberOfMatches: numberOfMatches(words, stringifiedObject),
  };
};

module.exports = superSearch;
