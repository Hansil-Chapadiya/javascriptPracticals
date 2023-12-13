document.addEventListener('DOMContentLoaded', () => {
    let fisrtId = document.getElementById('first');
    fisrtId.insertAdjacentHTML('beforeend', '<div>Hello beforeend</div>');
    fisrtId.insertAdjacentHTML('beforebegin', '<div>Hello beforebegin</div>');
    fisrtId.insertAdjacentHTML('afterend', '<div>Hello afterend</div>');
    fisrtId.insertAdjacentHTML('afterbegin', '<div>Hello afterbegin</div>');
    fisrtId.remove()
})
