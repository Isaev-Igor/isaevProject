const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const slider = document.querySelector(".newslider");
let count = 0;


const startSlide = setInterval(nextSlide, 2000);

buttonNext.addEventListener("click", nextSlide);

function nextSlide() {

    if (count < 4) {
        count++;
    } else {
        count = 0;
    }

    slider.style.left = `${-count * 450 + "px"}`;
}

buttonPrev.addEventListener("click", prevSlide);

function prevSlide() {

    if (count > 0) {
        count--;
    } else {
        count = 4;
    }

    slider.style.left = `${-count * 450 + "px"}`;
}


slider.addEventListener("mouseover", stopWorkSlide);
slider.addEventListener("mouseout", startWorkslide);

function stopWorkSlide() {
    startSlide = clearInterval(startSlide);
}

function startWorkslide() {
    startSlide = setInterval(nextSlide, 2000);
}