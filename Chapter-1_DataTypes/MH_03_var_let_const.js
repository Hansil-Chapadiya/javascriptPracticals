console.log("var,let,const");
var a = 10;
let b = "hansil"; //var b = "hansil"
const c = 14;

{
    let b = 14; //var b = 14 override to above b;
    console.log(b, c);
}
console.log(a, b, c);