const toggleButton = document.getElementsByClassName('navbar__toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar__links')[0];
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('active');
})