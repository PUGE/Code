"use strict";
const addon = require('./build/Release/addon');

console.log('This should be eight:', addon.add(3, 5));