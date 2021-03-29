const { superSearch } = require("../lib/index.js");

const ss = superSearch({ ignore: ["0", " "] });
const ss2 = superSearch({ caseSensitive: true });

test('Find match with "foo" in {bar: "foo"}', () => {
  expect(ss("foo", { bar: "foo" })).toEqual({
    fullMatch: true,
    numberOfMatches: 1,
  });
});

test('Find match with "foo bar" in {bar: "foo", one: 1}', () => {
  expect(ss("foo 1", { bar: "foo", one: 1 })).toEqual({
    fullMatch: false,
    numberOfMatches: 2,
  });
});

test("remove whitespace", () => {
  expect(ss(" www ", { result: " w w w " })).toEqual({
    fullMatch: true,
    numberOfMatches: 1,
  });
});

test("remove 0", () => {
  expect(ss("01", { result: "1" })).toEqual({
    fullMatch: true,
    numberOfMatches: 0,
  });
});

test("Find Optimus Prime", () => {
  expect(ss2("Optimus Prime", { bot: "Optimus Prime" })).toEqual({
    fullMatch: true,
    numberOfMatches: 2,
  });
});

test("Don't find optimus prime", () => {
  expect(ss2("optimus prime", { bot: "Optimus Prime" })).toEqual({
    fullMatch: false,
    numberOfMatches: 0,
  });
});
