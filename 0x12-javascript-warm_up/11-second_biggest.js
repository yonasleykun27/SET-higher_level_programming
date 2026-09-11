#!/usr/bin/node
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const args = process.argv.slice(2).map(Number);
  const unique = Array.from(new Set(args)).sort((a, b) => a - b);
  console.log(unique.length < 2 ? 0 : unique[unique.length - 2]);
}
