const prompt = require("prompt-sync")({sigint:true});
let a = prompt("Enter a Number");
a = Number.parseInt(a);
console.log(typeof a);
alert(typeof a);
if(a >= 0){
    alert("number is positive");
}
else{
    alert("Number is negative");
}