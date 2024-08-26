document.addEventListener('scroll', function() {
    const introSection = document.querySelector('.intro-content h1');
    const introPosition = introSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
        introSection.style.animation = 'none';
        introSection.offsetHeight; /* Trigger reflow */
        introSection.style.animation = 'typing 4s steps(30, end) forwards, blink-caret 0.75s step-end infinite 4s';
    }
});


