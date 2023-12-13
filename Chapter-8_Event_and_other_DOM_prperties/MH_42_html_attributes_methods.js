// document.addEventListener("DOMContentLoaded", () => {
//     let idvalue = document.body.getElementsByClassName('box');
//     let id_ = idvalue[0].id;
//     let a = first.getAttribute("class");
//     console.log(a);
//     console.log(id_);
//     "can i write 'id_' instead of 'first' here"
//     // console.log(id_.hasAttribute("class"));
//     // console.log(id_.hasAttribute("style"));

// })
document.addEventListener("DOMContentLoaded", () => {
    let idvalue = document.body.getElementsByClassName('box');
    let id_ = idvalue[0].id;

    let elementWithId = document.getElementById(id_); // Select the element by its id
    let a = elementWithId.getAttribute("class"); // Access the class attribute
    // console.log(a);
    // console.log(id_);
    // console.log(elementWithId.hasAttribute("class"));
    // console.log(elementWithId.hasAttribute("style"));
    // console.log(elementWithId.setAttribute("style","color:blue"));
    // console.log(elementWithId.removeAttribute("class"));
    // console.log(elementWithId.attributes);
    console.log(elementWithId.dataset);
    console.log(elementWithId.dataset.game);
    console.log(elementWithId.dataset.player);

});

