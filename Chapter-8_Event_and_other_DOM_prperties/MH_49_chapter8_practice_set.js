//Question-1
// document.addEventListener('DOMContentLoaded', () => {
//     let btn1 = document.getElementById('btn1');
//     let btn2 = document.getElementById('btn2');
//     let btn3 = document.getElementById('btn3');

//     let x = (e) => {
//         alert("BUTTON - 1 CLICKED");
//     }
//     let y = (e) => {
//         alert("BUTTON - 2 CLICKED");
//     }
//     let z = (e) => {
//         alert("BUTTON - 3 CLICKED");
//     }

//     btn1.addEventListener('click',x);
//     btn2.addEventListener('click',y);
//     btn3.addEventListener('click',z);
// })


//Question-2
// document.addEventListener('DOMContentLoaded', () => {
//     let btn1 = document.getElementById('btn1');
//     btn1.addEventListener('click', (e) => {
//         location.href = 'https:www.google.com';
//     })
//     let btn2 = document.getElementById('btn2');
//     btn2.addEventListener('click', (e) => {
//         location.href = 'https:www.fb.com';
//     })
//     let btn3 = document.getElementById('btn3');
//     btn3.addEventListener('click', (e) => {
//         location.href = 'https:www.youtube.com';
//     })
// })

//Harry solution

// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)



//Question-4
// document.addEventListener('DOMContentLoaded', () => {
//     const getValuefunc = () => {
//         let getValue = prompt('Enter any value: ex..Q:quit');
//         if (getValue == 'Q' || getValue == 'q') {
//             clearInterval(setTimeInterval);
//         }
//         else {
//             document.write("<br>", getValue, " has written");
//         }
//     }

//     let setTimeInterval = setInterval(getValuefunc, 5000);
// })

//Question-5
// document.addEventListener('DOMContentLoaded', () => {
//     setInterval(() => {
//         document.getElementById('bulbID').classList.toggle('bulb');
//     }, 2000);
// })