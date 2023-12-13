alert("Hello")

const sum = (a,b)=>{
    console.log("Running" , (a + b));
    a + b;
}

setTimeout(sum,1000,1,2);
// setInterval(sum,1000,4,5);
// setInterval(()=>{
//     alert("Hello word")
// },2000)

// let a = setTimeout(() => {
//     alert("I am inside setTimeout");
// }, 2000);

// let b = confirm("Disable setTimeout");
// if (b) {
//     clearTimeout(a);
// }
// else {

// }
// console.log(a)

