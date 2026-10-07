# 0x15. JavaScript - Web Interactive

## Description
This project introduces foundational front-end web development concepts using vanilla JavaScript. It covers DOM (Document Object Model) manipulation, element selection, event handling with `addEventListener`, dynamic CSS class toggling with `classList`, modifying DOM node styles and text content, and dynamically creating and inserting new HTML elements into the document tree without external libraries such as jQuery.

## Learning Objectives
- How to select HTML elements using `document.querySelector` and `document.querySelectorAll`
- Differences between ID, class, and tag name selectors
- How to modify element styles directly via the `style` object
- How to handle user interactions using `addEventListener`
- How to manipulate CSS classes using `classList.add()` and `classList.toggle()`
- How to update element text content using `textContent`
- How to dynamically create new DOM nodes using `document.createElement()` and insert them with `appendChild()`
- Understanding how modern vanilla JavaScript eliminates the need for legacy libraries like jQuery

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- All files will be interpreted on any current, modern browser (Chrome, Firefox, Safari, Edge)
- All files must end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- You must use vanilla JavaScript only. Do not import jQuery or any other external library.
- You are not allowed to use `var` (`let` or `const` only)
- HTML should not reload for each action: DOM manipulation, update values, fetch data...
- Code style is compliant with `semistandard` (version 16.x.x / 17.x.x)

## Tasks

| File | Description |
| --- | --- |
| `0-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`) using vanilla JavaScript. |
| `1-script.js` | Updates the text color of every `<p>` element on the page to blue (`#0000FF`) using `document.querySelectorAll` and iterating with `.forEach()`. |
| `2-script.js` | Updates the text color of the `<header>` element to red (`#FF0000`) when the user clicks on the tag `DIV#red_header` using `addEventListener`. |
| `3-script.js` | Adds the CSS class `red` to the `<header>` element when the user clicks on the tag `DIV#red_header` using `classList.add()`. |
| `4-script.js` | Toggles the class of the `<header>` element between `red` and `green` when the user clicks on the tag `DIV#toggle_header` using `classList.toggle()`. Ensures the element always has exactly one class and is never empty. |
| `5-script.js` | Adds a `<li>Item</li>` element to `UL.my_list` when the user clicks on the tag `DIV#add_item` using `document.createElement()` and `appendChild()`. |
| `6-script.js` | Updates the text of the `<header>` element to `New Header!!!` when the user clicks on `DIV#update_header` using the `textContent` property. |
