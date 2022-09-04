// This util copies the given text to the clipboard.

const copyToClipboard = (text) =>
  navigator?.clipboard?.writeText(text) ?? false;

// Usage
copyToClipboard("Hello World!");
