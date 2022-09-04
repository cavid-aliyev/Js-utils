// This util returns a random string.

const getRandomString = (length) =>
  [...Array(length)]
    .map(() => String.fromCharCode(~~(Math.random() * 26) + 97))
    .join("");

// Usage
getRandomString(10); // Random string with 10 characters
