# AI Usage Disclosure

## Project: 0x15. JavaScript - Web Interactive

**Student:** Yonas Leykun  
**Date:** 2026-10-07  
**AI Tool Used:** Antigravity (Google DeepMind)

---

## How AI Was Used

### Task Understanding
AI was used to analyze the project requirements for Week 6 (DOM manipulation, event handling, class toggling, and dynamic element insertion) and clarify how modern vanilla JavaScript APIs replace legacy jQuery patterns.

### Code Generation & Review
AI assisted in:
- Structuring clean, idiomatic ES6+ scripts adhering strictly to the `semistandard` coding style (semicolons, 2-space indentation, single quotes).
- Selecting DOM elements precisely with `document.querySelector` and `document.querySelectorAll`.
- Implementing `classList.toggle()` to ensure clean class switching between `red` and `green` without leaving the element empty or with multiple conflicting classes.
- Utilizing `document.createElement()` and `appendChild()` for dynamic list item creation.
- Using `textContent` for safe string updates to the DOM.

### Debugging & Verification
- Validated each script against the corresponding HTML test harness.
- Verified that all actions operate purely via client-side DOM manipulation without triggering page reloads.
- Ensured code quality and syntax compliance.

### What I Learned / Did Myself
- Modern JavaScript standards natively support intuitive DOM querying and manipulation without third-party libraries.
- The difference between `NodeList` and individual elements, and iterating using `.forEach()`.
- Managing UI state and toggle flows via `classList`.
- Dynamically building and appending DOM trees using `createElement` and `appendChild`.

---

## Summary
AI was used as a pair-programming assistant to validate code patterns and ensure rigorous compliance with project specifications and coding style guidelines. All logic and implementations were verified.
