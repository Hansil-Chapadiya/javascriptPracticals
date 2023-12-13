document.addEventListener("DOMContentLoaded", () => {
    console.log(document.body.firstChild);
    let a = window.document.body.firstChild;
    console.log(a.parentNode);
    console.log(a.parentElement);
    console.log(a.firstChild.nextSibling);
});
