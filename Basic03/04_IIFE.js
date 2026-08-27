// Immediately Invoked Function Expressions (IIFE)
        //   Functions that we want to execute immediately
// *** used when we dont want that our function will be abrupted or polluted by the global scope ***

(function chai(){ // ***it is a named IIFE of name chai
    console.log(`DB CONNECTED`);
})();  /* NOTE--- when we want to use different IIFe after one IIFE ,
then it is must to terminate the previous using semicolon ;  this acts as a terminator of the context ti make it work properly 
*/

//using parameter age
(function chai(age){
    console.log(`DB CONNECTED ${age}`);
})(19); 


( () => { // *** it is a unnamed IIFE
    console.log(`DB CONNECTED TWO`);
} )();   // terminator is must for IIFE for not getting error


 //using parameter 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// NOTE ---> remember to use terminator ; while writing two IIFE or more than that ..........