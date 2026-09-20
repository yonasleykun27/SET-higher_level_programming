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
