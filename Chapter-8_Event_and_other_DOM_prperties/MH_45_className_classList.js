document.addEventListener('DOMContentLoaded',() =>{
    firstID = document.getElementById('first');
    firstID.className = 'red text-light'
    console.log(firstID.classList);
    console.log(firstID.classList.contains('red'));
    firstID.classList.remove('text-light');
    firstID.classList.add('text-light');
    firstID.classList.toggle('text-light');
})