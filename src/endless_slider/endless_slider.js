class Slider {
    constructor(imgClassName, delay) {
        this.imgClassName = imgClassName;
        this.count = 0;
        this.delay = delay;
    }

    showSlideInterval(start) {
        this.start = setInterval(() => this.nextSlide(), this.delay);
    }

    nextSlide(imgClassName) {
        this.count < 4
            ? this.count++
            : this.count = 0;
        document.querySelector(this.imgClassName).style.left = `${-this.count * 450 + "px"}`;
    };

    prevSlide(imgClassName) {
        this.count > 0
            ? this.count--
            : this.count = 4;
        document.querySelector(this.imgClassName).style.left = `${-this.count * 450 + "px"}`;
    };
}

class FirstSlider extends Slider {
    constructor(imgClassName, delay, nextBtnClassName, prevBtnClassName) {
        super(imgClassName, delay);
        this.nextBtnClassName = nextBtnClassName;
        this.prevBtnClassName = prevBtnClassName;
    }

    buttonNext(nextBtnClassName, imgClassName, count) {
        document.querySelector(this.nextBtnClassName).addEventListener("click", () => this.nextSlide());
        document.querySelector(this.nextBtnClassName).removeEventListener("click", () => this.nextSlide());
    };

    buttonPrev(prevBtnClassName, imgClassName, count) {
        document.querySelector(this.prevBtnClassName).addEventListener("click", () => this.prevSlide());
        document.querySelector(this.prevBtnClassName).removeEventListener("click", () => this.prevSlide());
    };
}

class SecondSlider extends Slider {
    constructor(imgClassName, delay, start) {
        super(imgClassName, delay);
    }

    addMouseEvent(imgClassName, start) {
        let view = 0;
        if (!view) {
            this.showSlideInterval(start);
            view++
        }
        document.querySelector(this.imgClassName).addEventListener("mouseout", () => this.showSlideInterval());
        document.querySelector(this.imgClassName).removeEventListener("mouseout", () => this.showSlideInterval());
    };

    deleteMouseEvent(imgClassName, start) {
        document.querySelector(this.imgClassName).addEventListener("mouseover", () => clearTimeout(this.start));
        document.querySelector(this.imgClassName).removeEventListener("mouseover", () => clearTimeout(this.start));
    };
}


let slide1 = new FirstSlider(".newslider1", 2000, ".next", ".prev");
let slide2 = new SecondSlider(".newslider2", 2000);

slide1.buttonNext();
slide1.buttonPrev();
slide1.showSlideInterval();
slide2.addMouseEvent();
slide2.deleteMouseEvent();



