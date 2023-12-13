const prompt = require("prompt-sync")({sigint:true});

//Question-1
obj = {
    hansil: 99,
    Mary: 90,
    Alice: 93,
    Mackenzie: 98
}

for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(Object.values(obj)[i], " got ", Object.keys(obj)[i]) //obj[Object.keys(obj)[i]]
}
console.log("\n")

//Question-2
for (let keys in obj) {
    console.log(keys, " got ", obj[keys])
}

//Question-3
console.log("\n")
let n = prompt("Enter value of n: ");
let i = 0;
while(i < n)
{
    console.log("try again")
    i++;
}

//Question-3
const mean = (w,x,y,z) => {
    return (w+x+y+z)/4
}

console.log(mean(10,19,14,15));