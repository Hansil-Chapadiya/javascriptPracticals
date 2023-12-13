//Question-1
let age = prompt("Enter your age");
if (age >= 10 && age <= 20) {
    alert("Your age is between 10 and 20")
}
else {
    alert("Your age is not between 10 and 20");
}

//Question-2
let month = prompt("Enter Month");
let s = "Your birth month is:";
switch (month) {
    case 'January': alert(s + "January"); break;
    case 'February': alert(s + "February"); break;
    case 'March': alert(s + "March"); break;
    case 'April': alert(s + "April"); break;
    case 'May': alert(s + "May"); break;
    case 'June': alert(s + "June"); break;
    case 'July': alert(s + "July"); break;
    case 'August': alert(s + "August"); break;
    case 'September': alert(s + "September"); break;
    case 'October': alert(s + "October"); break;
    case 'November': alert(s + "November"); break;
    case 'December': alert(s + "December"); break;
    default: alert("Invalid Month");
}

//Question-3
let num = prompt("Enter Number");

if (num % 2 == 0 && num % 3 == 0) {
    alert("Number is Divisble by 2 and 3");
}
else if (num % 3 == 0) {
    alert("Number is Divisble by 3");
}
else if (num % 2 == 0) {
    alert("Number is Divsible by 2");
}
else {
    alert("Number is not divisible by nither 2 nor 3");
}

//Question-4
let ageDrive = prompt("Enter your age");
msg = ageDrive > 18 ? "You can Drive" : "You can't Drive";
alert(msg);