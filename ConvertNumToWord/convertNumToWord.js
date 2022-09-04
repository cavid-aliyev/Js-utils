// Converts large numbers like 1000000 to "1M".

const numToWord = (number) =>
  number.toLocaleString("en-US", { notation: "compact" });

// Usage
numToWord(1000000); // "1M"
