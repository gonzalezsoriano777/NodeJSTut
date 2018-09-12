// Tutorial 2 ... 
//console.log('hello career devs');


//Tutorial 4 ...



/* 
console.log(_dirname);
console.log(_filename);
*/

// Tutorial 5

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