const prompt = require("prompt-sync")({sigint:true});
/*
1) FOR
2) FOR OF
3) FOR IN
4) WHILE
5) DO..WHILE
*/

//For loop
// let n = prompt("Enter value of n:");
// let sum=0;
// for (let index = 1; index <= n7; index++) {
//     sum += index;
// }
// console.log(sum);

//For-in loop
// let obj = {
//     Hansil:18,
//     Mackenzie:21
// }

// for(let name in obj)
// {
//     console.log(name, " : ", obj[name]);
// }

//For-of loop
for(let char of "Hansil")
{
    console.log(char);
}