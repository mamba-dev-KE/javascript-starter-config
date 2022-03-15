// This file is not transpiled, so must use CommonJS and ES5

// Register babel to transpile before out tests run
require("@babel/register")();

// Disable webpack features that Mocah doesn't understand
require.extensions[".css"] = function () {};
