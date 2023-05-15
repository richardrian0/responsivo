const menuhamburger = document.querySelector('.hamburger-menu');

const menu = document.querySelector('.menu');
menuhamburger.addEventListener('click', ()=> {
    menu.classList.toggle('ativo');
});