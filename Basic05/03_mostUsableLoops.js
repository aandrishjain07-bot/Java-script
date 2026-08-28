// --------------Interesting Loops (most usable loops for array)-------------

/* 1. As we know the syntax of real function is given by function function_name (parameter1,parameter2 etc.) {
return parameters1 .......   or the function body
} 
   2. here inside foreach loop we call this function as CALL BACK FUNCTION and 
   it is not needed to name the function that is the syntax difference of function iside foreachloop in array

// */
// const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( function (value){      // here we can us any name instead of value  
//     console.log(value);
// } )


// *** In arrow function format ***

// const arrowfunc = (para1 ,para2) => { //SYNTAX
//     return ____;
// }

// *** Arrow fucntion as a call back function ***

// coding.forEach( (item) => {   
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


//foe each loop also has access to various parameters in built like given below 

// coding.forEach( (item, index, arr)=> {  // item ,index ,and array itself
//     console.log(item, index, arr);
// } )

// --------------Scenario [{},{},{}] objects inside array------------

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {  // here we can find item , index and array 
    
    // console.log(item);
    console.log(item.languageName);
    console.log(item.languageFileName);
} )