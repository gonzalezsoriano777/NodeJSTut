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
var stuff = require('./stuff');


console.log(stuff.counter(['shaun', 'crystal', 'yuri'])); // calls the counter variable using the module exports
console.log(stuff.adder(5,6)); // calls the adder variable

console.log(stuff.adder(stuff.pi, 5)); // using the adder to add the pi and then calls the pi with the method made 'stuff'