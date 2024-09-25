const div = document.querySelector('#div');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    div.textContent = 'Click';
});
