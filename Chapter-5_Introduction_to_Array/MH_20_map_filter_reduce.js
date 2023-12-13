let arr = [45, 23, 21];

//map method
let mapValue = arr.map((element,index,array) => {
    // console.log(element,index,array);
    return element + 1;
});

// console.log(mapValue);

//Array Filter method
let arr2 = [45, 23, 21];
arr.filter(element=>{
    // console.log(element<100?element:false)
})

//Array reduce method
let arr3 = [45, 23, 21];
let newArray = arr3.reduce((h1,h2)=>{
    return h1 + h2;
})

console.log(newArray)