document.addEventListener("DOMContentLoaded", () => {
    let a = document.getElementsByTagName('span')[0];

    a.innerHTML = a.innerHTML + "<h1>Introducing Container</h1>";

    let div = document.createElement('div')
    div.innerHTML = "Hello I am real container";
    // a.appendChild(div);
    // a.append(div);
    // a.prepend(div);
    a.before(div);
    a.after(div);
    a.replaceWith(div)
});
