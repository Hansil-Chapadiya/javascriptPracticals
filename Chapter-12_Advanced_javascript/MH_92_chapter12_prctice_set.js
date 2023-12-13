//Question-1
/*const print = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello");
            resolve(1); // Resolve the Promise with a value (1 in this case).
        }, 2000);
    }).then((val) => {
        setTimeout(() => {
            console.log("world");
        }, 2000);
    });
};

print()*/

//Question-2
/* const arr = [1,2,4,5,6.8,4,7.8,2.3,5];
const average = (...arr)=>{
    return (arr.reduce((accumulator,currentvalue)=>(Number.parseFloat(accumulator)+ Number.parseFloat(currentvalue)),0))/Number.parseFloat(arr.length)
}
console.log(average(...arr)); */

//Question-3
/* ((n)=>{
    return new Promise((resolve,reeject)=>{
        setTimeout(()=>{
            resolve(true);
        },n*1000)
    }).then(()=>{
        console.log("DONE");
    })
})(4); */

//Question-4
let i = ((p,r,n)=>{
    return ((Number.parseInt(p) * Number.parseInt(r) * Number.parseInt(n))/100.0);
})(1,2,3);

console.log(i);
