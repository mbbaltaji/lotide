# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by @mbbaltaji as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mbbaltaji/lotide`

**Require it:**

`const _ = require('@mbbaltaji/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Function that asserts if two arrays are equal.
* `assertEqual(prim1, prim2)`: Function that asserts if two primitives are equal.
* `assertObjectsEqual(obj1, obj2)`: Function that asserts if two objects are equal.
* `countLetters(string)`: Function that returns letter count of a given string.
* `countOnly(items, itemsToCount)`: function that takes items and returns count of speciefied items.
* `eqArrays(arr1, arr2)`: Functions that compares two arrays and returns true if they're equal.
* `eqObjects(obj1, obj2)`: Function that takes two objects and returns true if the objects are an exact match.
* `findKey(obj, callback)`: Function that takes in object and a callback, returns the key if the call back function is satisfied.
* `findKeyByValue(obj, val)`:function that taken in an object and a value. Returns the key of the given value.
* `flatten(NestedArray)`: Function that takes in a nested array and returns a flattened/unnested array containing all values of the nested array.
* `head(array)`: Function that takes in an  array and returns the head(first elemnet) in the array. Otherwise undefined is returned.
* `index`: Contains all the utility functions mentioned here, encapsulated in an object for better access.
* `letterPositions(sentence)`: Fucntions that returns the position(index) of each letter in the given sentece.
* `map(array, callBack)`: Function that taken in an array and a callback function. Returns a new array of the elements that satisfy the callback function. 
* `middle(array)`: Function that takes in an array and returns the middle.
* `tail(array)`: Function that takes in an array and returns the tail of the array  (removes head).
* `takeUntil(array, callBack)`: Function that takes in an array and a callback. pushes all items of array into into a new array, until the callback evalautes to true. 
* `without(array, itemsToRemove)`: Functions that takes in two arrays. the original array and an array containing the items to remove. Returns the new array with the removed items.
```
