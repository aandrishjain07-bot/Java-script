const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
 
// spread operator when we want to combine individual elements of more than two arrays
// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// using flat operation to bifurcate all elemnts as a single element of a new array

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// console.table(real_another_array); // in good table format

/* sometimes when we fetch data from databases we got it in different format 
but if we want it in array only then we use 'Array'word can be used
*/

// console.log(Array.isArray("Hitesh"))  // false  QUESTION ??
// console.log(Array.from("Hitesh")) // from converted this to array


// unable to create array of the below statement as it got confused so give us a empty array

// IMP .... console.log(Array.from({name: "hitesh"})) // interesting



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates an array using of operation 'Array.of()'
