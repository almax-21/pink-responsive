const slider = document.querySelector('.slider');
const slidesList = slider.querySelectorAll('.slider__slide');
const slides = Array.prototype.slice.call(slidesList);

const dotsList = slider.querySelectorAll('.dots__dot');
const dots = Array.prototype.slice.call(dotsList);

const prevSliderArrow = slider.querySelector('.slider__arrow--prev');
const nextSliderArrow = slider.querySelector('.slider__arrow--next');

const removeActiveSlide = (slide, dot) => {
  slide.classList.remove('slider__slide--active');
  dot.classList.remove('dots__dot--active');
};

const addActiveSlide = (slide, dot) => {
  slide.classList.add('slider__slide--active');
  dot.classList.add('dots__dot--active');
};

let currentIndex = 0;

// === dots ===
const addDotClickHandler = (dot, index) => {
  dot.onclick = () => {
    dots.map((dot) => dot.classList.remove('dots__dot--active'));
    dot.classList.add('dots__dot--active');

    slides.map((slide) => slide.classList.remove('slider__slide--active'));
    slides[index].classList.add('slider__slide--active');

    currentIndex = index;
  };
};

for (let i = 0; i < dots.length; i += 1) {
  addDotClickHandler(dots[i], i);
}
// === / dots ===

// === arrows ===
nextSliderArrow.onclick = () => {
  removeActiveSlide(slides[currentIndex], dots[currentIndex]);
  (currentIndex + 1 === slides.length) ? currentIndex = 0 : currentIndex += 1;
  addActiveSlide(slides[currentIndex], dots[currentIndex]);
};

prevSliderArrow.onclick = () => {
  removeActiveSlide(slides[currentIndex], dots[currentIndex]);
  (currentIndex - 1 < 0) ? currentIndex = slides.length - 1 : currentIndex -= 1;
  addActiveSlide(slides[currentIndex], dots[currentIndex]);
};
// === / arrows ===
