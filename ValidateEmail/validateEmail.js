const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Usage
validateEmail("obama@gmail.com"); // true
