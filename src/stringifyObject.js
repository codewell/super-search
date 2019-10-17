const squashString = require('./squashString');
/**
 * 
 */
const stringifyObject = (obj) => {
  // const objectString = Object.getOwnPropertyNames(obj)
  //   .reduce((accumulator, propertyName) => {
  //     return accumulator + obj[propertyName];
  //   }, '');

  const objectString = JSON.stringify(obj);

  return squashString(objectString);
};

module.exports = stringifyObject;
