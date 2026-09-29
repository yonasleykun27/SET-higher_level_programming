# AI Usage Disclosure

## Project: 0x14. JavaScript - Web Scraping

**Student:** Yonas Leykun  
**Date:** 2026-09-29  
**AI Tool Used:** Antigravity (Google DeepMind)

---

## How AI Was Used

### Task Understanding
AI was used to clarify and understand the task requirements for each file in this project, particularly around asynchronous patterns in Node.js (callbacks vs Promises).

### Code Generation & Review
AI assisted in:
- Generating the structure of each script following the `semistandard` style guide
- Explaining the difference between `fs.readFile` (async) vs `fs.readFileSync` (sync) and why async is preferred
- Explaining how `request` module callback pattern works (`(err, response, body)`)
- Explaining why `101-starwars_characters.js` requires `Promise.all` to preserve character order (since concurrent async requests resolve in unpredictable order)
- Adding an `.on('error', ...)` handler to `5-request_store.js` to gracefully handle DNS/network errors instead of crashing

### Debugging
- AI diagnosed the `ENOTFOUND` DNS errors during local testing as a network restriction issue on the school computer, not a code bug
- AI verified all scripts pass `semistandard` linting (exit code 0)

### What I Learned / Did Myself
- Understanding the Node.js `process.argv` array and why file path starts at index 2
- How `.pipe()` works to stream HTTP response directly to a file write stream
- The difference between `100-starwars_characters.js` (random order, simple callbacks) and `101-starwars_characters.js` (in-order, using `Promise.all`)
- How `Array.prototype.reduce` is used in `4-starwars_count.js` to count films

---

## Summary
AI was used as a pair-programming assistant to validate code patterns and debug issues. All logic and understanding was verified manually.
