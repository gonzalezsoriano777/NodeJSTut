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