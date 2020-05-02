/**
 * Remove all whitespaces in a string and make lowercase
 * @param {*} searchString
 * @returns {string}
 */
const squashString = (searchString) =>
  searchString.replace(/\s+/g, " ").toLowerCase();

export default squashString;
