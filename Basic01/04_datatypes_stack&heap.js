// const id=Symbol(32) // Symbol data type
// const newid=Symbol(32)

// console.log(id===newid)
// console.log(id==newid)

// console.log(id);
// console.log(newid);

// console.log(typeof id , typeof newid);
// console.table([typeof id , typeof newid]);


// NON PRIMITIVE DATA TYPE

// const heros = ["oj", "spiderman"];
// let myobj = {
//     name: "AJ" ,
//     age: 19,
// }


// const Myfunction=function(){
//     console.log("HEllo This is me");
// }

// console.log(heros);
// console.log(myobj);
// console.table([myobj]);
// console.log(Myfunction);

// console.log(typeof Myfunction);



// STACK AND HEAP

let myyoutubename = "laghapex"

let anothername = myyoutubename
anothername = "randoz world"
console.log(myyoutubename);
console.log(anothername);

console.log(myyoutubename);// pass by value means copied value

// BY reference HEAP memory

let userone = {
    name_: "aj",
    age : 32
}

let usertwo = userone

usertwo.name_="Cjain"
usertwo.age=19 

/* refernece change in original user one value as it 
 stores in the heap memory 
 HEAP MEMORY
 */ 

console.log(userone);
console.log(usertwo);

console.log(userone.name_);
usertwo.age =23

console.table([userone , usertwo])
