document.addEventListener('DOMContentLoaded', () => {
    let p = new Promise((resolve, reject) => {
        console.log("Promise is pending");
        setTimeout(() => {
            alert("Promise rejected");
            // resolve(true);
            reject(new Error("I am error"));
        }, 5000)
    })
    // p.then((value)=>{
    //     console.log(value)
    // })
    p.catch((error)=>{
        console.log("error occured")
    },(error)=>{
        console.log(error)
    })


})
