//change card title
let ctitle = document.getElementsByClassName("card-title")[0];


let cExample = document.getElementById('carouselExample');
cExample.style.height = '300px'

let cardExample = document.getElementById('CardExample');
cardExample.style.marginTop = '300px'

let ctitles = document.querySelectorAll('.card-title');
ctitles[0].style.color = "RED";
ctitles[1].style.color = "GREEn";
ctitles[2].style.color = "BLUE";
ctitles[3].style.color = "ORANGE";
console.log(ctitles)

window.console.log(window.document.getElementsByTagName('div'));
window.console.log(window.document.querySelector('.card').getElementsByTagName('a'))