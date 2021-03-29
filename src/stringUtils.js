export const replaceString = (string, pattern, replacement) =>
  string.replace(new RegExp(pattern, "g"), replacement);

export const removeChar = (string, char) => replaceString(string, char, "");

export const toLowercase = (string) => string.toLowerCase();

export const resolveSearchWords = (searchString) =>
  searchString.split(" ").filter((s) => s !== "");

export const resolveCompareString = ({ ignore, caseSensitive }) => (string) => {
  if (caseSensitive) {
    return ignore.reduce(removeChar, string);
  }
  return toLowercase(ignore.reduce(removeChar, string));
};
