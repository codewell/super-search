# @codewell/super-search
Search in javascript objects with strings

## Installation
```JavaScript
npm install @codewell/super-search
```

## Basic usage
```JavaScript
import superSearch from '@codewell/super-search';

const searchString = 'foo bar 123';

const searchObject1 = { name: 'foo', age: 123 };

superSearch(searchString, searchObject1);
// => {numberOfMatches: 2, fullMatch: false}

const searchObject1 = { key: 'foo bar 123' };
superSearch(searchString, searchObject2);
// => {numberOfMatches: 1, fullMatch: true}
```

