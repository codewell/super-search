const superSearch = require('../src');

test('Find match with "foo" in {bar: "foo"}', () => {
  expect(superSearch('foo', { bar: 'foo' }))
    .toEqual({
      fullMatch: true,
      numberOfMatches: 1,
    })
});

test('Find match with "foo bar" in {bar: "foo", one: 1}', () => {
  expect(superSearch('foo 1', { bar: 'foo', one: 1 }))
    .toEqual({
      fullMatch: false,
      numberOfMatches: 2,
    })
});

/**
 * Dates
 */
const date = new Date('2019-01-01');
console.log(date);
test('Find match with "2019-01" in {date: date}', () => {
  expect(superSearch('2019-01', { date }))
    .toEqual({
      fullMatch: true,
      numberOfMatches: 1,
    })
});
