const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalSlides = document.querySelectorAll(".slide").length;
const visibleSlides = 5;

function updateCarousel() {
    const slideWidth = document.querySelector(".slide").offsetWidth + 20;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    if (index < totalSlides - visibleSlides) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});