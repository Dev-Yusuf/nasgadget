document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.text-slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    slides[currentSlide].style.display = 'block';
    setInterval(showNextSlide, 1000);
});