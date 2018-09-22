// Tutorial 1 Intro...

/*
Overview of Node
-A platform in which allow to run js to be able to run on a computer
-Easier to read files easier
-Can delete update or just upload files more efficently
What to ahcieve from this lesson
Learn the inner working of node
Create a web browser
Make a node.js app
*/


// Tutorial 2 , Installing Node.js

// Just showing how to install Node.js, and use it to open files from your documentary\

// Turtorial 3, The v8 Engine

/*
 Js Engines, don't understand Js infact it take JS and converts it to something
 More understandable for it, which is Machine Code
 
*/ 

// Understanding the process of v8 convertion
/*
Node.js is written in C++ ,its because it uses the v8 engine (one of js engines) which is actually written in C++ 
 So that it can convert to the js engine and that converts it to machine code
 
 */
 
// Tutorial 4, Global Project

/*
 setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);
*/ 


/*
var time = 0;
var timer = setInterval(function(){ // Updates how many seconds have passed each time, 
//and it keep running
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5){ // Represents that, once it passed 5 seconds it clear the interval and stops the loop
        clearInterval(timer);
    }
}, 2000);
*/


// Tutorial 5, Function Expressions

/*
Explaining function expressions
As well as show, how to move a expression to a recent fucntion(shown in the file, 'app.js')
*/

// Tutorial 6, Modules and Require()

/*
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
module.exports = counter; // exports the counter as a module and connects it the 'app.js' variable of counter
*/

// Tutorial 7, Module Patterns

/*
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
    
};
var adder = function(a,b){
    return `The sum of the 2 numbers is $(a+b)`;// template strings.. 
};
var pi = 3.142;
module.exports = { // stil doing the module exports but making more simplier to read
    counter: counter,
    adder: adder,
    pi: pi
}
module.exports = counter;
// ^ this has always been an empty object
module.exports.counter = counter;
module.exports.adder = counter;
module.exports.pi = counter;
// ^ this is exporting the variable you defined
// Easier way to use the module-exports is by replacing the var in each defined variable and use the module export
*/

// Tutorial 8, The Node Event Emitter

/*
var events = require('events');
var util = require('util');
var Person = function(name){
    this.name = name;
}
util.inherits(Person, events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];
people.forEach(function(person){
   person.on('speak', function(mssg){
       console.log(person.name + ' said: ' + mssg);
   });  // Takes whatever person object and attaching it the listener. 
});
james.emit('speak', 'hey dudes'); // using the variable james and make him speak and say 'hey dudes'
ryu.emit('speak', 'I want a curry'); // ^ Same Process
////////////////////////////////////
element.on('click', function(){})
var myEmitter = new events.EvenEmitter();
myEmitter.on('someEvent', function(mssg){
   console.log(mssg); });
myEmitter.emit('someEvent', 'the event was emitted'); // This event is emmitted and the string is moved towards the function 
//and it fires back to the console
*/

// Tutorial 9, Reading & Writing Files (fs)

/*
Everything done app.js in this section
*/

// Tutorial 10, Creating & Removing Directions

/*
 Used App.js for this Tutorial
*/

// Tutorial 11 , Clients and Servers


//Notes
/*
Protocals
A set of communications rules, that two sides agree to use when communicating
Ports
A Program running on a computer that can listen for requests sent to a particular port number
Ex... An IP Address, 172.24.86.76:3000
*/

// Tutorial 12, Creating a server

//Notes
/*
Responce Headers
Content-Type // what you put in the browser
Status // how to browser is doing
*/

// Tutorial 13, Streams and Buffers

// Notes
/*
Buffers
-Temporary Storage spot for a chunk of data that is being transferred from one place to another
- The Buffer is filled with data, then passed along
- Transfer small chunks of data at a time
Stream 
- Overall stream of data that flows overtime from one place to another
-Can create streams in Node.js to transfer data
-Increase Performance
*/


// Tutorial 14, Readable Streams

/*
Different Kind of streams
-Writeable Streams - allow node.js to write data to astream
-Readbable Streams - allow node.js to read data from a stream
-Duplex - can read and write to a stream
*/

// Tutorial 15, Writeable Streams

/*

Codes and Notes were made app.js

*/

// Tutorial 16, Pipes

// Notes
/*

Pipes

-Takes data from a read stream and then pipe it to the write stream
- In a way it moves it directly to where you want it to go

*/

// Tutorial 17, Serving HTML Pages

/*

Code was improved in app.js..

*/

// Tutorial 18, Serving JSON Data

/*

Code was done in app.js

*/


// Tutorial 19, Basic Routing

/*

Everything done in app.js

*/

// Tutorial 20, The Node Package Manager

/*

Notes

Essentially form a certain type of task within Node.js
(The express package helps for routing and templating )

We can load these packages "Node Package Manager" and use 
their Functionality in your own code

Express (Extra info)
Once using "npm install express" in either your atom, c9, or command prompt
Installs different modules so that express can work properly


*/

// Tutorial 21, The Package.json File

/*

Everything was done in app.js
 
 ejs is an html document but we can embedd javascript and data into it
 
 
*/

// Tutorial 22, Installing Nodemon

/*

Notes 

Nodeman

Monitor application files
If anything was updated or changed in the files

*/

// Tutorial 23, Introduction to Express

/*

HTTP methods

GET
Use a Url and make it into a address bar
Responding to Requests.. for Get use app.get('route', fn)

POST
Post Data to a web server
Responding to Requests.. for POST('route', fn)

DELETE
Delete Data
Responding to Requests.. for DELETE app.delete('route', fn)

PUT
requests that the enclosed entity be stored under the supplied Request-URI( Already Existing resource )
--Aren't using a responding to requests for PUT..

*/

// Tutorial 24, Express Route Params

/*

Everything is done in app.js

*/

// Tutorial 25, Template Engines

/*
Using an Engine called ejs in the app.js


*/

// Tutorial 26, Template Engines part 2

/*

Everything was done in app.js and index.html

*/

// Tutorial 27, Partial Templates

/*

Everything was done in script.js

*/


// Tutorial 28, Middleware and Static Files

/*

Everything was coded out in app.js

*/

// Tutorial 29, Query Strings

/*

Query Strings

-'mysite.com/blog/news?page=2'
- Page = 2 this word is connected to the link above
- 'mysite.com/contact?person=ryu&dept= marketing'
- Parse the request, and pull out the data
*/

// Tutorial 30, Handling POST Requests

/*

POST Requests method

Post is a request method
POST requests, ask the server to accept/store data which is enclosed in the body of the requests
Often used when submitting forms

*/

// Tutorial 31 , Making a To-do app (part 1)

/*

Just started installing all the packages for the To-do list app

*/


// Tutorial 32, Making a To-do app (part 2)

/*

MVC, Meaning

Module
Just data, can also be the user (here its our todo)

Controller
Bridges both the module and view
grabs the data from the module and decide how the user can view the data

view
Is what we send to the user
*/

// Tutorial 33, Making a To-do app (part 3)

/*

Everything was done in app.js

*/

// Tutorial 34, Intro to NoSQL/ MongoDB

/*

Notes

NoSQL Databases

- Alternative to SQL databases
- Stores documents(JSON) in a db, instead of tables with rows and columns
- Works really well with JS (and therefore Node.js)

*/

// Tutorial 36, Making To-do App (part 5)

/*

Everything was done in the controller folder with the file 'todocontrollers.js'

*/

// Tutorial 37, Making To-do App (part 6)fnl

/*

Everything was done in todocontroller.js

*/