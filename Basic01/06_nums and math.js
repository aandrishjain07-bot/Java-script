// const balance = new String('AJ')
// const balance1 = new Number(23) // new keyword creates an typecasting and creates object

// console.log(balance);
// console.log(balance1);
// // conversion to string
// console.log(balance1.toString())
// //proof    typeof ....
// // as this is converted to string now so we can use
// // all the property of the string like length concat etc 

// console.log(balance1.toString().length)
// console.log(balance1.toFixed(2)) // for precsie calculation using 2 fixed after decimal 


// const newnumber = 23.4813
// console.log(newnumber.toPrecision(2));
// // console.log(newnumber.toPrecision(3));
// // console.log(newnumber.toPrecision(4));
// console.log(newnumber.toPrecision(1));

// round off when using toPrecision to any number

// const hundreds = 10000000
// console.log(hundreds.toLocaleString());//us standard for commas
// console.log(hundreds.toLocaleString('en-IN'));//indian standard

// Number.MAX_VALUE

console.log(Number.MAX_VALUE); // limit 
// it shows some info about Numbers using NUmbers. different function


// ----------------MATHS-----------------

// console.log(Math)
// console.log(typeof Math)


// console.log(Math.abs(-5))
// console.log(Math.round(3.27))
// console.log(Math.floor(3.97))
// console.log(Math.ceil(3.12))

// various functions in inspect mode in browser

console.log(Math.min(3,4,2,6,9))

console.log(Math.random()); // in btw 0 to 1 only 
// but for different cases

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
