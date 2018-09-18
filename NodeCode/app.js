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



// Tutorial 21...

/*

// This is all called from using npm init in the Command Prompt (which im using)
{
 "name": "node-js-playlist",
 "version": "1.0.0",
 "description": "a little test app",
 "main": "app.js",
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
 },
 "keywords": [
     "fun"
     "ninjas"
     ],
     "author": "me",
     "license": "ISC"
     "dependencies": {
         "express": "^4.13.4"
     }
}

// Cool Fact ...
If you were to have 6 files of the Package.json 
and send it to another to another developer, and if they wanted to install or reinstall all the 
packages in the Package.json they can use "npm install"
and the Command Prompt finds the package or files and installs them again


*/

// Tutorial 22...

/*

var http =  require('http');
var fs =require('fs');

var server = http.createServer(function(req, res){ 
     console.log('request was made: ' + req.url); // check the request of a specific url   
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
     res.createReadStream(__dirname + '/index.html').pipe(res);   
    }else if(req.url === '/contact-us'){ // this is a more efficent way of working with Node.js, once changing something on the file it requests what was made and it and restarts the file like a robot knowing its role once its assigned
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

*/

// Tutorial 23...

/*

var express = require('express');

var app = express(); // call the variable and since its uesd the require method, we fire it as a function

app.get('/', function(req, res){
   res.send('this is the homepage'); // once using the word "home" it brings you to a page in which has the text for this
});

app.get('/', function(req, res){
   res.send('this is the contact page'); // once using the word "contact" it brings you to a page in which has the text for this
});

app.listen(3000); // We make a port that listens to 3000



*/

// Tutorial 24...

/*

var express = require('express');

var app = express(); 

app.get('/', function(req, res){
   res.send('this is the homepage'); 
});

app.get('/contact', function(req, res){
   res.send('this is the contact page'); 
});

app.listen(process.env.PORT, process.env.IP, 3000);
app.get('/profile/:id ', function(req, res){ // can also  use a name of any sort and it still calls the same request
   res.send('You requested to see a profile with the id of ' + req.params.id); // What it does is make a url into a address and then use a request text to the browser and then stores it with the req.params.id into the port itself
});

app.listen(3000); 


*/

// Tutorial 25...


/*

var express = require('express');

var app = express(); 

app.set('view engine', 'ejs'); // sets the engine to ejs

app.get('/', function(req, res){
   //res.send('this is the homepage');
   res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
   // res.send('this is the contact page');
   res.sendFile(__dirname + '/contact.html');
});

server.listen(process.env.PORT, process.env.IP, 3000);
app.get('/profile/:name ', function(req, res){ // can also  use a name of any sort and it still calls the same request
   
   var data = {
     age: 29,
     job: 'ninja'
   }; 
   
   res.render('profile', {person: req.params.name, data: data}); // places a name from the profile, and grabs it data that is used index.html
});

app.listen(3000);

*/


// Tutorial 26... part2


/*
var express = require('express');

var app = express(); 

app.set('view engine', 'ejs'); // sets the engine to ejs

app.get('/', function(req, res){
   //res.send('this is the homepage');
   res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
   // res.send('this is the contact page');
   res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){ // can also  use a name of any sort and it still calls the same request
   
   var data = {
     age: 29,
     job: 'ninja',
     hobbies: ['eating', 'fighting', 'fishing']
   }; 
   
   res.render('profile', {person: req.params.name, data: data}); // places a name from the profile, and grabs it data that is used index.html
});

app.listen(process.env.PORT, process.env.IP);

*/


// Tutorial 27...



var express = require('express');

var app = express(); 

app.set('view engine', 'ejs'); // sets the engine to ejs

app.get('/', function(req, res){
   //res.send('this is the homepage');
   res.render('index');
});

app.get('/contact', function(req, res){
   // res.send('this is the contact page');
   res.render('contact'); 
});

app.get('/profile/:name ', function(req, res){ // can also  use a name of any sort and it still calls the same request
   
   var data = {
     age: 29,
     job: 'ninja',
     hobbies: ['eating', 'fighting', 'fishing']
   }; 
   
   res.render('profile', {person: req.params.name, data: data}); // places a name from the profile, and grabs it data that is used index.html
});


app.listen(process.env.PORT, process.env.IP);



// Tutorial 28...


/*

var express = require('express');

var app = express(); 

app.set('view engine', 'ejs'); // sets the engine to ejs
app.use('/assets' , express.static('stuff'))// function(req, res, next){  //this middleware matches any url the user writes once adding '/'
// even when you use a different expression such like 'stuff' it still defines the assets since you classified it from the beginning 
  
  // console.log(req.url);
  // next();   // being able to use more words to be added connected to the url   




app.get('/', function(req, res){
   res.render('index');
});

app.get('/contact', function(req, res){
      
   res.render('contact'); 
});

app.get('/profile/:name ', function(req, res){ // can also  use a name of any sort and it still calls the same request
   
   var data = {
     age: 29,
     job: 'ninja',
     hobbies: ['eating', 'fighting', 'fishing']
   }; 
   
   res.render('profile', {person: req.params.name, data: data}); // places a name from the profile, and grabs it data that is used index.html
});


app.listen(3000);

*/

// Tutorial 29...

/* 

var express = require('express');

var app = express(); 

app.set('view engine', 'ejs'); // sets the engine to ejs
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res){
   //res.send('this is the homepage');
   res.render('index');
});

app.get('/contact', function(req, res){
   
   //console.log(req.query);
   res.render('contact', {qs: req.query}); 
});

app.get('/profile/:name ', function(req, res){ // can also  use a name of any sort and it still calls the same request
   
   var data = {
     age: 29,
     job: 'ninja',
     hobbies: ['eating', 'fighting', 'fishing']
   }; 
   
   res.render('profile', {person: req.params.name, data: data}); // places a name from the profile, and grabs it data that is used index.html
});


app.listen(process.env.PORT, process.env.IP);

*/




