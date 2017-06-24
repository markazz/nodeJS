

// using nodejs file system 
var fs = require('fs'); 

// er represents any errors
// data is the file data 
fs.readFile('./myFile.json', function(er, data){

// display data 
console.log(data);

});







