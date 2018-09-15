// Tutorial 2 ... 
//console.log('hello career devs');


//Tutorial 4 ...



/* 
console.log(_dirname);
console.log(_filename);
*/

// Tutorial 5

/*
function callFunction(fun){
    fun();
}





//function expressions
function sayHi(){
    console.log('hi');
}



sayHi();

//function expression 
var sayBye = function(){
    console.log('bye');
};


sayBye();



callFunction(sayBye); // This variable 'sayBye' will be passed with the recent 'callFunction'.
*/


// Tutorial 6 ...

/*
var counter = require('./count'); // find the js file, and once use it as a variable it 
//grabs the variable of counter in the 'script.js' and connects them

console.log(counter(['shaun', 'crystal', 'ryu']));
*/

// Tutorial 7...
/*
var stuff = require('./stuff');


console.log(stuff.counter(['shaun', 'crystal', 'yuri'])); // calls the counter variable using the module exports
console.log(stuff.adder(5,6)); // calls the adder variable

console.log(stuff.adder(stuff.pi, 5)); // using the adder to add the pi and then calls the pi with the method made 'stuff'
*/

// Tutorial 8...

// Script.js was used for this lesson

// Tutorial 9...
/*
var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
}); // reads the file and stores it , This is all non-blocking code
// If there mutilple request this goes much quicker


// console.log('test');

//console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe); // Grab the file and move it towards the readMe


*/



// Tutorial 10...
/*
var fs = require('fs');

fs.unlink('.stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});

//fs.mkdirSync('stuff'); //make a directory using node
//fs.rmdir('stuff'); // removes directory using node
//////////////////////////////////////
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utd8', function(err, data){
       fs.writeFile('.stuff/writeMe.txt', data); // Makes a file called writeMe.txt
    });
});
*/

// Tutorial 11...

// Notes were taken in the script.js file

// Tutorial 12...

// How to create the server
/*

var http = require('http');

var server = http.createServer(function(req, res){ // Takes to parameters (request and responce)
     console.log('request was made: ' + req.url);   
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hey ninjas');
   
                                                   
});


server.listen(3000, '127.0.0.1'); // IP Address plus the 3000  calls the console
console.log('yo dawgs, now listening to port 3000'); // this is how you set up a server in node.js

*/


// Tutorial 13...

/*

Took notes in the file script.js

*/

// Tutorial 14...

/*

var http =  require('http');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8') // Read the data small amount of a time, then buffer then that buffer it's gonna pass that data in chunks

myReadStream.on('data', function(chunk){
    console.log('new chunk recieved:');
    console.log(chunk); //  reading the data, making sure its v8 stream and everytime there a chunk of data you are able to do something with it , everytime you get a small piece of data you can send it to the user
    // using a writeable stream, so that you can send small chunk or a piece at a time to the client rather then wait for the whole thing to be sent.
}) // read the file, then buffers, recognizes it and finds a solution

*/

// Tutorial 15...

/*

// Using Writeable Streams on this one

var http =  require('http');
var fs =require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); // Splitting this file into chunks of data
// Read the data small amount of a time, then buffer then that buffer it's gonna pass that data in chunks

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); 


 

myReadStream.on('data', function(chunk){
    console.log('new chunk recieved:');
    myWriteStream.write(chunk); // You write into the variable 'myWriteStream', the chunk of data you have 
});

*/

// Tutorial 16...

/*

// Using Pipes...





var http =  require('http');
var fs =require('fs');






var server = http.createServer(function(req, res){ // Takes to parameters (request and responce)
     console.log('request was made: ' + req.url);   
   res.writeHead(200, {'Content-Type': 'text/plain'});
   var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); // Splitting this file into chunks of data
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); 


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8') // Read the data small amount of a time, then buffer then that buffer it's gonna pass that data in chunks
// Reads the contents of the file (Overall)
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.pipe(myWriteStream); //sends all the the data from ReadStream to the WriteStream
myReadStream.pipe(res); 

   res.end('Hey ninjas');
   
                                                   
});


server.listen(3000, '127.0.0.1'); // IP Address plus the 3000  calls the console
console.log('yo dawgs, now listening to port 3000'); // this is how you set up a server in node.js


*/

// Tutorial 17...

/*

var http =  require('http');
var fs =require('fs');






var server = http.createServer(function(req, res){ 
     console.log('request was made: ' + req.url);   
   res.writeHead(200, {'Content-Type': 'text/html'}); 
   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); // Calling the HTML file

myReadStream.pipe(res); 
});

server.listen(3000, '127.0.0.1'); 
console.log('yo dawgs, now listening to port 3000'); 


*/







// Tutorial 18... 

/*

var server = http.createServer(function(req, res){ 
     console.log('request was made: ' + req.url);   
   res.writeHead(200, {'Content-Type': 'application/json'}); 
   var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29

};
res.end(JSON.stringify(myObj));

    
});

server.listen(3000, '127.0.0.1'); 
console.log('yo dawgs, now listening to port 3000'); 


*/


// Tutorial 19...

/*

var http =  require('http');
var fs =require('fs');

var server = http.createServer(function(req, res){ 
     console.log('request was made: ' + req.url); // check the request of a specific url   
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
     res.createReadStream(__dirname + '/index.html').pipe(res);   
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res); // These 2 are for creating routes in whcih we can call in the search bar on the top of a browser
    }else  if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }else {
         res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res); 2
    }
        
});

server.listen(3000, '127.0.0.1'); 
console.log('yo dawgs, now listening to port 3000'); 


*/

// Tutorial 20...

/*

Notes taken in script.js

*/

