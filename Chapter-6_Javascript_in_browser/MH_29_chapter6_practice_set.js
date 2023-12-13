const prompt = require("prompt-sync")({ sigint: true });
//Question-1
let age = Number.parseInt(prompt("Enter age for check eligibility of driving"));
if (age >= 18) {
    alert("You are eligible for driving");
}
else if (age <= 0) {
    console.error("Age is negaive");
    alert("Age can't be negative");
}
else {
    alert("You are not eligible for driving");
}

//Question-2
while (true) {
    let confirmAge = confirm("Do you want to prompt again");
    if (confirmAge) {
        let age = Number.parseInt(prompt("Enter age for check eligibility of driving"));
        if (age >= 18) {
            alert("You are eligible for driving");
        }
        else if (age < 0) {
            console.error("Age is negaive");
            alert("Age can't be negative");
        }
        else {
            alert("You are not eligible for driving");
        }
    }
    else {
        break;
    }
}

//Question-4
if(age > 4){
    location.href = "https://www.google.com/";
}
else{
    location.href = "https://www.instagram.com/"
}

//Question-5
let color = prompt("Enter color name or hex digit of color");
if (color != null)
{
    window.document.body.style.background = color;
}
else{
    alert("Please enter a color");
}