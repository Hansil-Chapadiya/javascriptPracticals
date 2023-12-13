document.addEventListener('DOMContentLoaded', () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // alert("not Resolve");
            resolve(1);
        }, 2000);
    })

    p1.then(() => {
        console.log('Hurry');
    })
    p1.then(() => {
        console.log("P1 RESOLVED")
    })

})