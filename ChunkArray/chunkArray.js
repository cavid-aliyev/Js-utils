// Chunks the array into x length chunks.

const chunkArray = (array, chunkSize) =>
  [...Array(Math.ceil(array.length / chunkSize))].map((_, index) =>
    array.slice(index * chunkSize, (index + 1) * chunkSize)
  );

// Usage
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
