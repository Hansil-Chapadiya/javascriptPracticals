let a = {
    // name: "hansil",
    language:"javascript",
    run: ()=>{
        console.log("self run");
    }
}
// console.log(a.toString());
// console.log(a.valueOf());
// console.log(a);

let p = {
    run: ()=>{
        console.log("run");
    }
}

p.__proto__ = {
    name:"Hansil",
}

a.__proto__ = p;
a.run()
console.log(a.name)