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














