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

superSearch(searchString, { name: 'foo', age: 123 });
// => {numberOfMatches: 2, fullMatch: false}

superSearch(searchString, { key: 'foo bar 123' });
// => {numberOfMatches: 1, fullMatch: true}
```
