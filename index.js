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

// Slider functionality
const imageSlides = document.querySelectorAll('.slide-image');
const contentSlides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// To reference DOM elements and track slider state
let currentSlide = 0;
let cycling = true

// Update current slide
function updateCurrent(index) {
    imageSlides.forEach(img => img.classList.remove('active'));
    contentSlides.forEach(slide => slide.classList.remove('active'));

    imageSlides[index].classList.add('active');
    contentSlides[index].classList.add('active');
}

// Next slide
function nextSlide() {
    currentSlide++

    if (currentSlide === slides.length) {
        currentSlide = 0; //Reset to start
    }
    updateCurrent(currentSlide);
}

// Next Button Event
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % imageSlides.length;
    updateCurrent(currentSlide);
});

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + imageSlides.length) % imageSlides.length;
    updateCurrent(currentSlide);
}

// Previous Button Event
prevButton.addEventListener('click', () => {
    prevSlide()
})

updateCurrent(0)