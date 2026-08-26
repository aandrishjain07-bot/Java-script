// -------FUNCTION DEFINITION-------

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName() //output function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }   // output Nan

// ---------correct or another way ------------
// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result // keyword must to return any value in output
//     return number1 + number2    // remember after return in function it doesnot execute any code after the return keyword is used
// }

// -----gyaan-----> result variable is differnent inside or outside function due to the concept of SCOPE

// const result = addTwoNumbers(3, 5)//  Mistake this doesnot mean that the answer is stored in the variable result

// // console.log("Result: ", result);



// function loginUserMessage(username = "sam") //(default value) Here sam is got fixed if user doesnot input anything 
// {
//     if(username===undefined){
//         console.log("PLease enter a username");
//         return // after return, nothing execute inside that function
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())
// console.log(loginUserMessage("AJ")) // here AJ overwrites sam

// -----------------------------------------------------
// ----Situation used for shopping carts where we dont know the exact No. of parameters given by the user


// function varcalculateCartPrice(...num1){
//     return num1
// }
// console.log(varcalculateCartPrice(200, 400, 500, 2000))
// -----above statement print all the arguments in array format ----

// function calculateCartPrice(val1, val2, ...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// ==============Object in Function===============

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject) // anyobject is parameter of object type
// {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)

// -------directly uses function , not necessary to make object first then access it---------
//---------we can directly make object while caliing the function itself

// handleObject({
//     username: "sam",
//     price: 399
// })

// =============ARRAY IN FUNCTION===============
 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] // index 1
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,"ohh", 400, 500, 1000])); // here we created a new array inside the function itself at the time of calling

// ----------------------------------------------------------------------------------------

// IMP ----> It is not must to put any argument inside variable first we can directly create an array or an object inside function itself (at the time of calling) while using that function

// NOTE ________---->

/* when we use anything inside function so it is must to call the parameter that is used in the function declaration not the 
actual argument ,  
it is must to remember that for example if calling a object key so remember to use ${parameter_name.key} 
same in array also like ex. return parameter_name[indexing]  */
