// CommonJs, every file in NodeJs is module (by default)
// Modules - Encapsulased code (only share minimum)


//import modules
const names = require('./4-names.js');
const salamPagi = require('./5-utils');
const data = require('./6-alter-way');
require('./7-mind-grenade');

console.log(names);
salamPagi(names.namaLengkap);
console.log(data);

addValues(1, 2);