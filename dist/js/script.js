const burger = document.getElementById('sidebarToggle');
const header = document.getElementById('header');

burger.addEventListener('click', event => {
    document.body.classList.toggle('show-sidebar')
});