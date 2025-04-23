const mobileMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu-list');
const menuHeader = document.querySelector('.menu-header');
const menuNav = document.querySelector('.menu-nav'); 
const closeMenu = document.querySelector('.close-menu');
const logo = document.querySelector('.logo');

// Add event listener to the mobile menu icon
mobileMenu.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuNav.classList.toggle('active');
    closeMenu.classList.toggle('active');
    logo.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    menuHeader.classList.toggle('active');
});

// Add event listener to the close menu icon
closeMenu.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuNav.classList.toggle('active');
    closeMenu.classList.toggle('active');
    logo.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    menuHeader.classList.toggle('active');
});