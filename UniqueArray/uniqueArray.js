// This util makes items in an array unique.

const uniqueArray = (array) => [...new Set(array)];

// Usage
uniqueArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
