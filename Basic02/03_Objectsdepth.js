// singleton
// Object.create  (contructor method)
// above way is the another way to create an singleton object

// object literals

// const mySym = Symbol("key1") // defining a symbol data type 


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1", // correct way to use symbol in square brackets interview imp
// without square bracket it is considered as a normal string ispite we declared it as a symbol
// it is imp to use square bracket to use as a symbol *** IMP ***

//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)  // way one to access object
// // console.log(JsUser["email"]) // way 2 to access object 

// way 2 is universal approach and a good approach 

// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser) // freeze a object cannot manipulate the object in future 
// as we know object uses pass by reference as a method thats why freeze it .......

// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);  hence it is freezed it does not change in object 


// ---------- FUNCTION in object ---------- //


// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); // this operator to access inside object variables
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());