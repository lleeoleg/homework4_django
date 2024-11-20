document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let slideIndex = 0;
    const totalSlides = slideImages.length;

    showSlide(slideIndex);

    function showSlide(index) {

        if (index < 0) {
            slideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }

        slideImages.forEach((image, idx) => {
            if (idx === slideIndex) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 3000);
});
