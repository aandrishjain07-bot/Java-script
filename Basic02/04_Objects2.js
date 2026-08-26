// // const tinderUser = new Object()
// const tinderUser = {} // empty obj

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);



// NESTING Of OBJECT

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }


// Access of nesting objects
// // console.log(regularUser.fullname.userfullname.firstname);


// // ----------Merging of objects ------------

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // // const obj3 = { obj1, obj2 }

// //way curly braces acts as a target obj for all the other objects that are present right after the empty braces 
// const obj3_ = Object.assign({}, obj1, obj2, obj4)
//  console.log(obj3_);


// // *** spread*** MDN documentation
// const obj3 = {...obj1, ...obj2} // spread option like we used in array
//  console.log(obj3);

// -------ARRAY OF OBJECTS -------//

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// ---------Interesting things----------

// // console.log(Object.keys(tinderUser)); // prints keys of object in arrray format 
// // console.log(Object.values(tinderUser)); // prints values of object in arrray format 
// // console.log(Object.entries(tinderUser)); // prints entries of object in arrray format means individual key value pair in differnent array


// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // hence give ans in true or false  if that key is present inside a object or not
  

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// // course.courseInstructor

//-----------Destructure of object(IN curly braces)-----------

const {courseInstructor: instructor} = course // give short name to courseInstructor

// console.log(courseInstructor);
// console.log(instructor);


// ----------------API (in JSON)----------------
  
// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]