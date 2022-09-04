// This util loops a function x times. Useful if you have many loops.

const loop = (x, fn) => [...Array(x)].forEach(fn);

// Usage
loop(10, () => console.log("Hello World!"));
