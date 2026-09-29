#!/usr/bin/node
const request = require('request');

const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(body).characters;
    for (const character of characters) {
      request(character, (charErr, charRes, charBody) => {
        if (charErr) {
          console.log(charErr);
        } else {
          console.log(JSON.parse(charBody).name);
        }
      });
    }
  }
});
