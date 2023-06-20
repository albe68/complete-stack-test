//repl in node.js can be write code in console
const repl = require('node:repl');
/* repl.start() 
   ^^^^^^^^^^^^ start a repl 
*/

//FILE SYTEM WRITING A FILE //
const fs = require('fs');

const content = 'Some contenasaat!';

try {
  fs.writeFileSync('./test.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}
//TYPE CONVERSION IN CONST IS POSSIBLE MAKING IT LOSELY TYPED
const a=1;
console.log(a+"1");