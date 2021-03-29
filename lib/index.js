"use strict";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

/**
 *
 */
var matchReducer = (stringifiedObject) => (hits, word) => {
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

var numberOfMatches = (words, stringifiedObject) =>
  words.reduce(matchReducer(stringifiedObject), 0);

var replaceString = (string, pattern, replacement) =>
  string.replace(new RegExp(pattern, "g"), replacement);
var removeChar = (string, char) => replaceString(string, char, "");
var toLowercase = (string) => string.toLowerCase();
var resolveSearchWords = (searchString) =>
  searchString.split(" ").filter((s) => s !== "");
var resolveCompareString = (_ref) => {
  var { ignore, caseSensitive } = _ref;
  return (string) => {
    if (caseSensitive) {
      return ignore.reduce(removeChar, string);
    }

    return toLowercase(ignore.reduce(removeChar, string));
  };
};

var defaultOptions = {
  ignore: [" "],
  caseSensitive: false,
};
/**
 * Super text serach function for JSON objects.
 * Make everything into a string with no spaces
 * and search for any occurance.
 */

var superSearch = function superSearch() {
  var options =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : defaultOptions;
  return (searchString, searchObject) => {
    var resolvedOptions = _objectSpread2(
      _objectSpread2({}, defaultOptions),
      options,
    );

    var stringifiedObject = resolveCompareString(resolvedOptions)(
      JSON.stringify(searchObject),
    );
    return {
      fullMatch:
        stringifiedObject.indexOf(
          resolveCompareString(resolvedOptions)(searchString),
        ) !== -1,
      numberOfMatches: numberOfMatches(
        resolveSearchWords(searchString),
        stringifiedObject,
      ),
    };
  };
};

var index = {
  superSearch,
  replaceString,
  removeChar,
};

module.exports = index;
