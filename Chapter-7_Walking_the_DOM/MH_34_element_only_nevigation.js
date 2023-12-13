document.addEventListener("DOMContentLoaded", () => {
    let a = document.body;
    console.log("firstchild node: ", a.firstChild);
    console.log("firstchild element: ", a.firstElementChild);
    console.log("lastchild element: ", a.lastElementChild);
    console.log("nextelement sibling element: ", a.nextElementSibling);
    console.log("previouschild sibling element: ", a.previousElementSibling);
});

