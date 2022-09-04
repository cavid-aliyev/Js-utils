// This util detects if the user is in dark mode. And if so, it returns true.

const isDarkMode = () =>
  globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches ?? false;

// Usage
isDarkMode();
