// // const coding = ["js", "ruby", "java", "python", "cpp"]


// // const values = coding.forEach( (item) => {
// //     //console.log(item);
// //     return item 
// // } )

// // console.log(values); // *** Inspite of using return in above code it will give us a output of undefined ***

//---------------------filter operation--------------------------------------

/***In filter we need too write a condition in call back function and filter is diff from forEach as it returns the value***/

// definition--> the primary use to create the new array containing only the elements from an existing array that pass a specific condition

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4) // here it gives output implicitly
// console.log(newNums);

// ===================BUT===================

// ---NOTE-> /*when we use curly braces this means now we have use it explicitly means we must use return 
//        // becoz as we use curly braces that means we have started a new scope to terminate this , use return */ exaample below

// // const newNums = myNums.filter( (num) => {
// //     return num > 4
// // } )
// console.log(newNums);

// -----------Same work of filter using for each-------------

// // const newNums = []

// // myNums.forEach( (num) => {
// //     if (num > 4) {
// //         newNums.push(num)
// //     }
// // } )

// // console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

let userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 
})

// Remember to use return when using curly braces 

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })

  console.log(userBooks);