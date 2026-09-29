# 0x14. JavaScript - Web scraping

## Description
This project covers JavaScript web scraping concepts using Node.js, including reading and writing files with the `fs` module, making HTTP requests with the `request` module, consuming REST APIs (Star Wars API, JSONPlaceholder), and handling asynchronous operations with callbacks and Promises.

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- All scripts are interpreted on Ubuntu 20.04 LTS using `node` (version 14.x)
- All files end with a new line
- The first line of all files is exactly `#!/usr/bin/node`
- Code is compliant with `semistandard` (version 16.x.x / 17.x.x)
- `var` is not used anywhere (`let` or `const` only)
- All files are executable

## Dependencies
```bash
npm install request
```

## Tasks

| File | Description |
| --- | --- |
| `0-readme.js` | Script that reads and prints the content of a file. The first argument is the file path. The content of the file must be read in `utf-8` format. If an error occurred, print the error object. |
| `1-writeme.js` | Script that writes a string to a file. The first argument is the file path, the second is the string to write. The content of the file must be written in `utf-8` format. If an error occurred, print the error object. |
| `2-statuscode.js` | Script that displays the status code of a GET request. The first argument is the URL to request (GET). The status code must be printed like this: `code: <status code>`. |
| `3-starwars_title.js` | Script that prints the title of a Star Wars movie where the episode number matches a given integer. The first argument is the movie ID. Uses `https://swapi-api.alx-tools.com/api/films/:id`. |
| `4-starwars_count.js` | Script that prints the number of movies where the character Wedge Antilles is present. The first argument is the API URL (`https://swapi-api.alx-tools.com/api/films/`). Wedge Antilles is character `/18/`. |
| `5-request_store.js` | Script that gets the contents of a webpage and stores it in a file. The first argument is the URL, the second is the file path to store the body response. The file must be UTF-8 encoded. |
| `6-completed_tasks.js` | Script that computes the number of tasks completed by user id. The first argument is the API URL (`https://jsonplaceholder.typicode.com/todos`). Only print users with at least one completed task. |
| `100-starwars_characters.js` | Script that prints all characters of a Star Wars movie. The first argument is the Movie ID. Displays one character name per line. |
| `101-starwars_characters.js` | Script that prints all characters of a Star Wars movie in the same order as the characters list in the API response. The first argument is the Movie ID. Displays one character name per line. Uses `Promise.all` to preserve order. |
