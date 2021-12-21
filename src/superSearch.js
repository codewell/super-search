import { numberOfMatches } from "./numberOfMatches";
import { resolveCompareString, resolveSearchWords } from "./stringUtils";

const defaultOptions = {
  ignore: [],
  caseSensitive: false,
};

/**
 * Super text serach function for JSON objects.
 * Make everything into a string with no spaces
 * and search for any occurance.
 */
export const superSearch = (options = defaultOptions) => (
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
