// const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Enter a number or string");
let type = typeof a;
alert(`Your input type is ${type}`);
let write = confirm("Wanna write on the page that input");
if (write)
{
    document.write(a);
}
else
{
    document.write("Why deny");
}