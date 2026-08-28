// // for

// for (let i = 0; i <= 10; i++) {  //ctrl d for operation at once and ctrl + shift + l for single any word throughout the code
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// } 

// console.log(element);  //output nothing >due to---Concept of SCOPE-------

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }

// ---------------------------------------------------------------

// let myArray = ["flash", "batman", "superman"]
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     //console.log(element);
    
// }
// -----------------------Gyann------------------------------

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break   // skips all iteration and exit out of the loop
//     }
//    console.log(`Value of i is ${index}`);  
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue   // only skips the current iteration
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// ---------------------WHILE LOOP----------------------


// let index = 0
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// -------------------DO WHILE-------------------

// let score = 11
let score = 1

// atleast iterate once whther condition is true or not 


do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);