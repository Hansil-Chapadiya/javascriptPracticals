document.addEventListener("DOMContentLoaded", () => {

    let btn = document.getElementById('btn');

    let x = (e) => {
        console.log(e.target);
        alert('Hello world1');
    }

    let y = () => {
        alert('Hello world2');
    }


    btn.addEventListener('click', x)
    btn.addEventListener('click', y);


    let a = prompt("What is favorite number");
    if (a == 2) {
        btn.removeEventListener('click', y);
    }
    else{
        btn.removeEventListener('click',x)
    }
})