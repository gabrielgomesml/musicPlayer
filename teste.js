var fs = require('fs');
var files = fs.readdirSync('musics/');

console.log('musics/' + files[0])
console.log(files)
//console.log(files.length)
