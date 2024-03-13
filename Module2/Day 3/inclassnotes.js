// function declaration syntax <--recommended to use most of the time unless you have to do the other
function descriptiveFunctionName(parameters + types) -> return value(+ type)
{
	// implementation. The return of this function is undefined - is basically "We don't know."
    //a function return that returns "voice" means it doesn't return anything.
    // with the function keyword, this syntax gets read first.
}

//parts of a function: name, paramater, and return.
    //you define functions with a paramater, but call them with an argument. Arguments will have values, 
    //parameters won't. 
    //check signatures of a fuction, name, paramanet and return when stuck. 

    function(){} //{} <--this is a function declaration statement.


    //Function expressions
    const descriptiveOtherFunctionName = (someParam) => {
        //implementation this is an arrow function
    }
    //fuction expression, we are making a variable name and store a function in it. The value is a function 
    //itself. 
    //differences in arrow function  lets you use an implicit return. const inplicitReturnFunction = (someParam) => 'x'; <==not curly brackets.
    //arrow functions are primarily used to return empty objects. 
    //explicit returns you would use the curly brackets in arrow functions when you have to key what is returning in those.
    //you can't call these after you declare them. you have to declare them so they can be "hoisted" otherwise they won't be read first like the others. 


    // FUNCTION TERMS (Below) -- Functions or their blocks should be easier to read and understand. Name should describe the purpose very well. They should not be large. Name your functions after what they do. A best practice is to make a another fuction that calls smaller taks functions.
    
    //conditional early return -- get notes from watching replay video.

    // side effects -- a function changes a variable. it should not have a return.

   // 'pure' functions -- purer the easier to read and to debug. if your function returns something, it should not have a side effect.

// common 'smells' where smells are bad things:
 //too many parameters - more than 3 is a problem, break it down. paramator object is a good solution when calling a lot of data.
  // multiple responsibilities - if a function returns something, it should not have side effects.
 // side effects + return values - 
 // multiple return types
 // A good use for comments in your code is to explain why not what (aka named badly and does too many things because badly named) Treat them as a code smell but used them such.
 //try to write less code and comments.

 pt. 2 - Local Scope vs Global Scope
local scope vs global scope - local scope inside, global outside.
function expressions vs funciton declarations - hoisting and context(this)
brief intro to boolean logic (will cover in more depth next week):
&&, ||, and ! operators
Ternary operator - example:
 if (true) { 
    x
} else {
    y
}

// TODO - revisit some Array methods that take functions: 
// "Truth tests"
find()/findlast()
filter()
every()/some()

// "Operations"
sort()
map()