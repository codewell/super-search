const squashString = require("./squashString");

/**
 *
 * @param {*} obj
 */
const stringifyObject = (obj) => {
  const objectString = JSON.stringify(obj);

  return squashString(objectString);
};

export default stringifyObject;
