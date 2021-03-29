const { replaceString } = require("../lib/index.js");

test("'a' -> 'd'", () => {
  expect(replaceString("a", "a", "d")).toEqual("d");
});

test("ab -> db", () => {
  expect(replaceString("ab", "a", "d")).toEqual("db");
});

test("optimus prime -> optimal prime", () => {
  expect(replaceString("optimus prime", "us", "al")).toEqual("optimal prime");
});

test("ababab -> aaaaaa", () => {
  expect(replaceString("ababab", "b", "a")).toEqual("aaaaaa");
});
