document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('heroSlider');
    const slides = slider.getElementsByTagName('img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    }

    // Set initial state
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = i === 0 ? '1' : '0';
        slides[i].style.position = 'absolute';
        slides[i].style.transition = 'opacity 0.5s ease-in-out';
    }

    // Start the slider
    setInterval(nextSlide, 3000);
});