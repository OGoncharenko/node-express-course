const names = require('./04-names');
const sayHello = require('./05-utils');
const personData = require('./06-alternative-flavor')

console.log(names);
console.log(sayHello);
console.log(personData);

sayHello(names.name1)
sayHello(names.name2)
require('./07-mind-grenade')