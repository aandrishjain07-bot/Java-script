// ------------- for of  (Array) specific loop------------

// ["", "", ""]
// [{}, {}, {}]

//

// for (const element of object) {     // SYNTAX -- this object is not the Object of js dont be confused 
                                       // here element refers to the name (variable name) 
                                       // object here refer to anything on we want to apply our loop
// }

// ex
//  const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {          //*here we can also use continue for spaces to skip that space in the output using if else 
//     console.log(`Each char is ${greet}`)
// }

// ------------------------ Maps ------------------------------------

// Map is also a type of object that also holds a key value pair 
// But it contains unique keys only ,  it is a built in keyowrd in js with some properties ..............

// ṇ
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);


// ----------for of------------- SYNTAX
// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

//  object cant be iterated using for of  loops 
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// -----------------loops in Object---------------------

// for of loop not working on object then its alternative is _
// *for in loop* to iterate on objects.

/* for (const key in object) {  // SYNTAX of for in

}*/

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {  //here  we can use any name instead of key we use key to make it more understandabe or readable as this gives the value of key on terminal thats why
//     // console.log(key);   //  print key
//     // console.log(myObject[key]); // to print value
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// ---------/*for in loop in Array */ 

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     //console.log(programming[key]);
//     //console.log(key);   // key of array in for in loop starts from 1 
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }