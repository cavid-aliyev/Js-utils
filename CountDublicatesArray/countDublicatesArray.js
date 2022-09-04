// Returns an object with the number of duplicates in the arra

const countDuplicates = (c) => {
  const t = {};
  return c.forEach((c) => (t[c] = (t[c] || 0) + 1)), t;
};

// Usage
countDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1 }
