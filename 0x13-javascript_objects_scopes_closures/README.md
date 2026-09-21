# 0x13. JavaScript - Objects, Scopes and Closures

## Description
This project covers object-oriented programming concepts in JavaScript, including creating objects and classes, constructor functions, instance attributes and methods, class inheritance (`extends` and `super`), prototypes, and scopes.

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- All scripts are interpreted on Ubuntu 20.04 LTS using `node` (version 14.x)
- All files end with a new line
- The first line of all files is exactly `#!/usr/bin/node`
- Code is compliant with `semistandard` (version 16.x.x / 17.x.x)
- `var` is not used anywhere (`let` or `const` only)
- All files are executable

## Tasks

| File | Description |
| --- | --- |
| `0-rectangle.js` | Empty class `Rectangle` that defines a rectangle using the `class` notation |
| `1-rectangle.js` | Class `Rectangle` with a constructor taking 2 arguments `w` and `h` and initializing `width` and `height` |
| `2-rectangle.js` | Class `Rectangle` that creates an empty object if `w` or `h` is equal to 0 or not a positive integer |
| `3-rectangle.js` | Class `Rectangle` that adds an instance method `print()` to print the rectangle using character `X` |
| `4-rectangle.js` | Class `Rectangle` that adds instance methods `rotate()` (swaps width and height) and `double()` (multiplies width and height by 2) |
| `5-square.js` | Class `Square` that inherits from `Rectangle` of `4-rectangle.js` with constructor taking `size` and calling `super(size, size)` |
| `6-square.js` | Class `Square` that inherits from `Square` of `5-square.js` and adds instance method `charPrint(c)` (defaults to `X` if `c` is undefined) |
| `7-occurrences.js` | Function `nbOccurences` that returns the number of occurrences of an element in a list |
| `8-esrever.js` | Function `esrever` that returns the reversed version of a list without using built-in `reverse` |
| `9-logme.js` | Function `logMe` that prints the number of arguments already printed and the new argument value |
| `10-converter.js` | Function `converter` that converts a number from base 10 to another base passed as argument without new variable declarations |
| `100-map.js` | Script that imports an array from `100-data.js` and computes a new array multiplying each value by its index using `map` |
| `101-sorted.js` | Script that imports a dictionary of occurrences by user id from `101-data.js` and computes a dictionary of user ids by occurrence |
| `102-concat.js` | Script that concatenates two files passed as the first two arguments into a destination file passed as the third argument |
