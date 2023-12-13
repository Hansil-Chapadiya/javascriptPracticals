//DOM EVENT
//Mouse
//Keyword
//form event
//document event

document.addEventListener("DOMContentLoaded", () => {
    let elementId = document.getElementsByTagName('div')[0];
    elementId.onclick = () => {
        console.log('Helo world')
    }

})
