// const prompt = require("prompt-sync")({ sigint: true });
// //Question-1
// let arr = [];
// console.log("Enter value to add an Array: Stop for 0");
// let val = Number.parseInt(prompt("Enter a Number: "));
// do {
//     arr.push(val);
//     val = Number.parseInt(prompt("Enter a Number: "));
// } while (val != 0);
// console.log(arr);

// //Question-3
// let newArray = []
// arr.filter((val, key, arr) => {
//     return (val % 10 == 0) ? newArray.push(val) : 0
// })

// console.log(newArray);

// //Question-4
// newArray = []
// arr.forEach((element) => {
//     newArray.push(element * element);
// })
// console.log(newArray);

//Question-5
arr = [1, 2, 3, 4, 5];
newArray = []
let n = arr.reduce((element1, element2) => {
    return(element1 * element2);
})
console.log(n);