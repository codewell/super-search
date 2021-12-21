# @codewell/super-search

Search in javascript objects with strings

## Installation

```JavaScript
npm install @codewell/super-search
```

## Basic usage

```JavaScript
import { superSearch } from '@codewell/super-search';

const options = {
  // Characters that should be ignored in the search object
  // Defaults to []
  ignore: [" "],
  
  // If the search should be case sensitive
  // defaults to false
  caseSensitive: false,
};

superSearch()('foo 123', { name: 'foo', age: 123 });
// => { numberOfMatches: 2, fullMatch: false }

superSearch({ignore: [" "]})('foo', { key: 'f o o' });
// => { numberOfMatches: 1, fullMatch: true }

superSearch({caseSensitive: true})('Foo', { key: 'foo' });
// => { numberOfMatches: 0, fullMatch: false }
```
