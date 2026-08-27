// const userEmail = "AJ@agn"
// const userEmail = ""
// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// -----------------RULES-------------------

// // falsy values

// // false, 0, -0, BigInt 0n, "", null, undefined, NaN


// //truthy values(surprising values)

// // "0", 'false', " ", [], {}-empty object, function(){}     ***important*** values
 

// ** To detect whether array or any object is empty or not **

// // if (userEmail.length === 0) {
// //     console.log("Array is empty");
// // }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {         // Object.keys(emptyObj) this give us an array so by using length function we can compare object also 
//     console.log("Object is empty");
// }

// -----------INTERESTING---------------

// // Nullish Coalescing Operator (??): null undefined

/* ***It is good to use when we call some database and firebase and like that then it is
   possible to get two values lke numbers or string or it can be sometimes null or undefined,
   at the time of null or undefined we need to use this nullish operator to prevent any stress occured
   by null or undefined to our code structure*** */

// let val1;
// // val1 = 5 ?? 10 // output 5
// // val1 = null ?? 10    // output 10
// // val1 = undefined ?? 15    // output 15
// // val1 = null ?? 10 ?? 20     // output 10



// console.log(val1);
 
// --------------------------------------------------

// // Terniary Operator( work as if else statement)

// // condition ? true : false // Syntax

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")