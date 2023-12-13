((n)=>{
    return new Promise((resolve,reeject)=>{
        setTimeout(()=>{
            resolve(true);
        },n*1000)
    }).then(()=>{
        console.log("DONE");
    })
})(4);