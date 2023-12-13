const prompt = require("prompt-sync")({sigint:true});
let n = prompt("Enter value of n: ");
let i=0;
while(i < n)
{
    console.log(i);
    i++;
}

//do..while
do{
    console.log(i);
}while(i<n);