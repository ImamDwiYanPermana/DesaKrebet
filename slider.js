let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.menu-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Add event listener to trigger animation
document.getElementById('triggerAnimation').addEventListener('click', function() {
    const animatedText = document.querySelector('.animated-text');
    animatedText.classList.add('animate');
});

