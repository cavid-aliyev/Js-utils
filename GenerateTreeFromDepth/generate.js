// If you need some testing JSON, you can use this snippet to generate a tree of depth depth.

const generateTree = (depth) =>
  [...Array(depth)].map(() => ({ tree: generateTree(depth - 1) }));

// Usage
generateTree(3); // [{ tree: [{ tree: [{ tree: [] }, { tree: [] }] }, { tree: [{ tree: [] }, { tree: [] }] }] }, { tree: [{ tree: [] }, { tree: [] }] }]
