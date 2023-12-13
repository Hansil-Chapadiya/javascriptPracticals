document.addEventListener("DOMContentLoaded", () => {
    console.dir(document.getElementsByTagName('span')[0]) // gives object
    console.log(document.body.firstChild.nodeName);
    console.log(document.body.firstElementChild.nodeName);
    console.log(first.innerHTML);
    console.log(first.outerHTML);
    // first.outerHTML = "<div>Hello</div>";
    console.log(document.body.firstChild.data);
    console.log(document.body.firstElementChild.nodeValue);
    // console.log(document.body.textContent);
})
