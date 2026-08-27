// //var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log("INNER: ", a);
    
// }



// // console.log(a);
// // console.log(b);
// // console.log(c);

// -------NESTED SCOPE GYAAN---------- 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // out of scope of two function

    //  two() 

}

// one()  // doesnt run as function two in one is commented so it does nt call it


// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website); // first error 
// }

// console.log(username);  // second errormas this is out of scope 


// ++++++++++++++++++ interesting ++++++++++++++++++

//CONCEPT  

// console.log(addone(5))

// function addone(num){    *** function declaration 1st way***
//     return num + 1
// }

// concept of HOISTING

// addTwo(5) // **error come becoz we call this function initially before declaration that is not possible 
                //   when we create function using 2nd way with the help of a variable **

// const addTwo = function(num){  *** Another way to declare function indide a variable ***
//     return num + 2
// }
 

// ---------------NOTE---------------

/*
1. We cannot call function before declaration in the case when we use variable to declare a fucntion

2.we can call function before declaration when we create a function using a conventional method (way 1) as given in line no. 52
*/