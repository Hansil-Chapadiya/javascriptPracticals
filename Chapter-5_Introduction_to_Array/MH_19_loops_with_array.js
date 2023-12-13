let num = [90, 87, 56, 78, 45, 90]
for (let i = 0; i < num.length; i++) {
    // console.log(num[i])
}

//For-Each
num.forEach(element => {
    console.log(element + element);
});

//Array.From
let num2 = "Hansil" // [9, 8, 7, 6]
console.log(Array.from(num2))

//for...of
for(let i of num)
{
    console.log(i);
}

//for...in
for(let i in num)
{
    console.log(i);
}