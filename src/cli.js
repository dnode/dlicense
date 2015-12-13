#! /usr/bin/env node
'use strict';

require('colors');
const fs = require('fs');
const dlicense = require('./lib.js');

let config = {};
try {
  config = require(process.cwd() + '/dlicense.json');
} catch(e) {
  console.log('No "dlicense.json" found'.yellow);
}
dlicense(config, (invalids) => {
  if (invalids.length) {
    for (let moduleData of invalids) {
      console.log(moduleData.id, moduleData.summary().join(', ').red);
    }
  } else {
    console.log('All licenses are compatible'.green);
  }
});
