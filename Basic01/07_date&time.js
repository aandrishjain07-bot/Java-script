// console.log(Temporal.Now.instant())
// console.log(Temporal.Now.timeZoneId());  // running inside codespaceshows UTC

console.log("hello")

// let mydate = new Date()   // create object
// console.log(mydate); // tough to read
// console.log(mydate.toString()); 
// console.log(mydate.toLocaleString()); //good
// console.log(mydate.toJSON()); 
// console.log(mydate.toISOString()); 
// console.log(mydate.toDateString()); // best 
// console.log(mydate.toTimeString()); 
// console.log(mydate.toLocaleTimeString()); 
 
// // date is object 

// let mynewdate= new Date(2024 , 0 , 21) 
// console.log(mynewdate.toDateString());
// console.log(mynewdate.toLocaleString());
 // month start from zero in js

//  let mydate = new Date("2024-02-15");//in YY MM DD
//  console.log(mydate.toString());
//  console.log(mydate.toLocaleString());
 
let myTimeStamp = Date.now()
console.log(myTimeStamp); // in mili second
// console.log(mydate.getTime()); // we can compare

// console.log(Date.now()/1000); //coversion in second
// console.log(Math.floor(Date.now()/1000)) //decimal values skips

console.log(`${myTimeStamp} string interpolation`)

let n= new Date()
console.log(n); // in mili second
console.log(n.getDay()); // in mili second
console.log(n.getMonth()+1); //month started from 0\\

// customization of locale string

n.toLocaleString('default', {
    weekday: "long",
    month:"2-digit"
})
