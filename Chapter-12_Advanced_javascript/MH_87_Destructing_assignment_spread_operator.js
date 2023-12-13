let arr1 = [3, 5, 6, 8, 9, 0, 7];
let [a, , ...rest] = arr1;

console.log(a, rest);

let arr2 = [1, 2, 3, 4, 56, 7];
let obj = {...arr2};

console.log(obj);

let fun = (...arr3) =>{
    return arr3.reduce((accumulator,currentvalue)=>Number.parseInt(accumulator)+Number.parseInt(currentvalue),0)
}
console.log(fun(...arr1));