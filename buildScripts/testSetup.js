// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand. We are telling Mocha to conside the import statement
// just as a function
require.extensions['.css'] = function() {};
