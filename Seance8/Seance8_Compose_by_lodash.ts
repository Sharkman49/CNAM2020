// A faire avant :
// npm i --save lodash
// npm i @types/node
var fp = require('lodash/fp');

let square = x => x * x;
let double = x => x * 2;
let half = x => x / 2;
let square_root = x => Math.sqrt(x);


// Utilisez une fonction de lodash pour composer
console.log('Compose sqrt((10*10) * 2 / 2) = ' + fp.compose(square_root, half, double, square)(20));

console.log('Flow sqrt((10*10) * 2 / 2) = ' + fp.flow(square,double, half, square_root)(20));