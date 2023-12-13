let promise = new Promise((resolve, reject) =>{
    console.error("I am error");
    resolve(56);
})

console.log("Hello one");
setTimeout(() => {
    console.log("Hello in 2 sec");
}, 2000)
console.log("My name is " + "Hello 3");
console.log(promise);
//state , value
