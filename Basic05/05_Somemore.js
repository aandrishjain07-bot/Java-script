const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// --------------------map method like forEach---------------------------

// MAP automatically return the value if curly braces not used like other

// const newNums = myNumers.map( (num) => { return num + 10}) // scope open so use return
// console.log(newNums);

// --------------------------CHAINING------------------------------
// ***IMPORTANT***

// ------NOTE-----> In chaining after every operation it is known that array is converted after each step so changes it chaining occured in the previous operation of array as given in example below 

// const newNums = myNumers
//                 .map((num) => num * 10 ) // output converts array to [10,20,30,40 ,....]
//                 .map( (num) => num + 1)     //output converts now array to [11,12,13,14 ,....]
//                 .filter( (num) => num >= 40)    // this filter checks the condition whether num is greater than 40 or not or give it as a output below

// console.log(newNums);


// ----------------------reduce method in js----------------------
// reduce method is usued to loop on array like to add the digits of array
// lecture 30 time 26 minute chai aur code yt 
 

// const myNums = [1, 2, 3]
 
// // const myTotal = myNums.reduce(function (acc, currval) {   // SYNTAX
// //     console.log(`acc: ${acc} and currval: ${currval}`);
// //     return acc + currval
// // }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // 0 is the accumulator value or initial value

// console.log(myTotal);

// -------------------good approach-----------------------

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
// console.log(shoppingCart);
// console.log(shoppingCart.itemName);//here this show error as shopping cart is not an single object its an array

// console.log(shoppingCart[0]);
// console.log(shoppingCart[1]);

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // here item is seen as a array element one by one and accumulator as a initial point of any value 

console.log(priceToPay);

