let p = fetch('https://goweather.herokuapp.com/weather/auckland')
p.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2);
})