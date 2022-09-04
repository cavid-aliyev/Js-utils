// This util returns the value of a cookie.

const getCookie = (name) =>
  ("; " + document.cookie).split(`; ${name}=`).pop().split(";")[0];

// Usage
getCookie("name"); // Value of cookie "name"
