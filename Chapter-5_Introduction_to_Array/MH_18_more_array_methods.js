// delete is operator
let num = [1, 2, 3, 4, 34]
delete num[0]
console.log(num, num.length) //doesn't affect array length

let num2 = [4, 6, 7, 8]
console.log(num.concat(num2))// doesn't change existing array


const compare = (a,b) =>{
    return a - b //for ascending
    // return b - a //for descending
}
console.log(num.sort(compare))
console.log(num.reverse())

//Splice nad Slice
let num3 = [90,87,56,78,45,90]
num3.splice(3,0,90,76,63)
console.log(num3)

console.log(num3.slice(1,5))
