import stringifyObject from "./stringifyObject";
import numberOfMatches from "./numberOfMatches";
import squashString from "./squashString";

/**
 * Super text serach function for JSON objects.
 * Make everything into a string with no spaces
 * and search for any occurance.
 */
const superSearch = (searchString, searchObject) => {
  // Look for all the words one by one
  const words = searchString.split(" ");
  const stringifiedObject = stringifyObject(searchObject);
  const fullMatch =
    stringifiedObject.indexOf(squashString(searchString)) !== -1;

  return {
    fullMatch,
    numberOfMatches: numberOfMatches(words, stringifiedObject),
  };
};

export default superSearch;
