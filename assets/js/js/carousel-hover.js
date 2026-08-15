// Auto update footer year
document.addEventListener('DOMContentLoaded', function () {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Pause product carousel on card hover
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);

    carousel.addEventListener('mouseenter', function () {
        bsCarousel.pause();
    });

    carousel.addEventListener('mouseleave', function () {
        bsCarousel.cycle();
    });
});