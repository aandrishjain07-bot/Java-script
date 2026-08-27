const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this refers to current context 
        console.log(this);// **this keyword print about the current context
    }

} 

// user.welcomeMessage()
// // Object.freeze(user)

// //context change
// user.username = "sam" // it changes as we didnt freeze it
// user.welcomeMessage()

console.log(this); // **here context  is unknown so it shows up with the empty set {}


// function chai(){
//     console.log(this);
// }

// chai()

// **Modified**

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // *** gives undefined that means 'this' keyword works only inside object not inside a function like this way only works for a context
// }

// chai()   *** means context is not defined inside function that why it gives undefined while object can provide context that is why this works there ***


// // const chai = function () {
// //     let username = "hitesh"         // this also shows undefined
// //     console.log(this.username);
// // }

// --------------------ARROW FUNCTION--------------------


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username); // this gives undefined 
//     console.log(this); // here we get empty  parenthesis {} , this means context is not defined 
// }


// chai()


// *** SYNTAX *** (3rd way to declare or create function arrow function)

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }
 
// ** IMPLICIT WAY for arrow fucntion without {} and 'return' keyword **
// // const addTwo = (num1, num2) =>  num1 + num2

// NOTE ---- If we use curly braces then it is must to use return keyword otherwise not 
// // const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"}) // here we call object inside parenthesis using curly braces also 

// console.log(addTwo(3, 4)) 
 
// // const myArray = [2, 5, 3, 7, 8]

// // myArray.forEach()