//Question-1
document.addEventListener("DOMContentLoaded", () => {
    let navBar = document.body.firstElementChild;
    let naturebtn = navBar.firstElementChild.firstElementChild;
    naturebtn.style.color = 'RED';

    /*
    let naturebtn = documnet.getElementByClassName('navbar-brand');
    naturebtn.style.color = 'RED';
     */
});

//Question-2

//Question-3
document.addEventListener("DOMContentLoaded", () => {
    let firstChildOfElement = document.getElementById('divID').firstElementChild;
    let lastChildOfElement = document.getElementById('divID').lastElementChild;
    firstChildOfElement.style.color = "RED";
    lastChildOfElement.style.color = "RED";
});


//Question-3
document.addEventListener("DOMContentLoaded", () => {
    let liElement = document.body.querySelectorAll('a');
    for (const item of liElement) {
        item.style.color = 'CYAN'
    }
    // console.log(liElement)
});


//harry_set
/*
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
})
*/