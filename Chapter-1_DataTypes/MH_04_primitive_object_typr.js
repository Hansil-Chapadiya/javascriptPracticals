/*
Primitive
N - Number
N - Null
S - String
S - Symbol
B - Boolean
B - BIGINT
U - Unefined

Non-Primitive
object
*/
let num = 10;
let nullnum = null;
let string = "Hansil";
let symbol = Symbol("Hansil");
let boolean = Boolean(1);
let bigInt = BigInt(367);
let undefinedVar = undefined;

console.log(num, nullnum, string, symbol, boolean, bigInt, undefinedVar);
console.log(typeof(bigInt));
console.log(typeof(boolean));

//Objects - Non-Primitive
const item = {
    "num1":10,
    "num2":14
};

console.log(item['num1'],item['num2']);