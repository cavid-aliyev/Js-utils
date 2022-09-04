// Gets random number from the given parameters

const getRandomNumber = (min, max) => ~~(Math.random() * (max - min + 1)) + min;

// Usage
getRandomNumber(1, 10); // Random number between 1 and 10
