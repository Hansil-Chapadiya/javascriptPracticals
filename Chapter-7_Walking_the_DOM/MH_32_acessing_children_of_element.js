document.addEventListener("DOMContentLoaded",  () => {
    console.log(document.body.firstChild);
    console.log(document.body.lastChild);

    let arr = Array.from(document.body.childNodes) //Node list
    console.log(arr);
});
