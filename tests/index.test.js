const { superSearch } = require("../lib/index.js");

const ss1 = superSearch();
const ss2 = superSearch({ caseSensitive: true });
const ss3 = superSearch({ ignore: [" "] });
const ss4 = superSearch({ ignore: ["1", "2", "x"], caseSensitive: true });

test('Default: Find match with "foo" in {bar: "foo"}', () => {
  expect(ss1("foo", { bar: "foo" })).toEqual({
    fullMatch: true,
    numberOfMatches: 1,
  });
});

test('Default: Find match with "foo 1" in {bar: "foo", one: 1}', () => {
  expect(ss1("foo 1", { bar: "foo", one: 1 })).toEqual({
    fullMatch: false,
    numberOfMatches: 2,
  });
});

test('Default: Find match with "foo bar" in {bar: "foo", one: 1}', () => {
  expect(ss1("foo bar", { bar: "foo", one: 1 })).toEqual({
    fullMatch: false,
    numberOfMatches: 2,
  });
});

test("remove whitespace", () => {
  expect(ss3(" www ", { result: " w w w " })).toEqual({
    fullMatch: true,
    numberOfMatches: 1,
  });
});

// test("remove 0", () => {
//   expect(ss("01", { result: "1" })).toEqual({
//     fullMatch: true,
//     numberOfMatches: 0,
//   });
// });

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

test("Don't find optimus prime", () => {
  expect(ss4("optimus prime", { bot: "Optimus Prime" })).toEqual({
    fullMatch: false,
    numberOfMatches: 0,
  });
});

test("Find one", () => {
  expect(ss4("Optimus prime", { bot: "1xx222xx1Optimus Prime" })).toEqual({
    fullMatch: false,
    numberOfMatches: 1,
  });
});
