////////////////
// Meet path ///
////////////////
const path = require('path');

//use  path.join
console.log("path.join with __dirname\n", path.join(__dirname));
console.log("path.join with __dirname with backstep\n", path.join(__dirname, '..'));
console.log("path.join with __filename\n", path.join(__filename));

//use path.resolve
console.log('path.resolve with __dirname\n', path.resolve(__dirname,"first", "second"));
console.log('path.resolve the same as with __dirname\n', path.resolve("first","second"));
console.log('path.resolve use root direction with "/" \n', path.resolve("..", "/first"));

//use path.parse
const fullpath = path.resolve("first", "test.js");
console.log("path.parse\n", path.parse(fullpath));

//use another features 
console.log("A seperate symbol in the operation system\n", path.sep);
console.log("Is path absolute verification\n", path.isAbsolute('first'));
console.log("A full name of the file\n", path.basename(fullpath));
console.log("The file extention\n", path.extname(fullpath));
