// const id=Symbol(32) // Symbol data type
// const newid=Symbol(32)

// console.log(id===newid)
// console.log(id==newid)

// console.log(id);
// console.log(newid);

// console.log(typeof id , typeof newid);
// console.table([typeof id , typeof newid]);


// NON PRIMITIVE DATA TYPE

const heros = ["oj", "spiderman"];
let myobj = {
    name: "AJ" ,
    age: 19,
}


const Myfunction=function(){
    console.log("HEllo This is me");
}

console.log(heros);
console.log(myobj);
console.table([myobj]);
console.log(Myfunction);

console.log(typeof Myfunction);