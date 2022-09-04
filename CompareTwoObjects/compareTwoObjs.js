const compareObjects = (obj1, obj2) => {
  const c = Object.keys(obj1),
    n = Object.keys(obj2);
  return c.length === n.length && c.every((c) => obj1[c] === obj2[c]);
};

// Usage
compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
