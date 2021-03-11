const moveSliderTrack = (track, elements, index) => {
  const multiplier = index + 1;
  const elementsCount = elements.length;
  const oneSlideWidthPercent = Math.floor(100 / elementsCount);
  const offsetToSlideCenter = 16;
  const percent = multiplier * oneSlideWidthPercent - offsetToSlideCenter;

  track.setAttribute('style', `transform: translateX(-${percent}%)`);
};

const addArrowsFunctionality = (slider, track) => {
  const prevSliderArrow = slider.querySelector('.slider__arrow--prev');
  const nextSliderArrow = slider.querySelector('.slider__arrow--next');
  const slides = Array.from(track.children);

  let currentIndex = Math.floor(slides.length / 2);

  prevSliderArrow.onclick = () => {
    if (currentIndex - 1 < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex -= 1;
    }
    moveSliderTrack(track, slides, currentIndex);
  };

  nextSliderArrow.onclick = () => {
    if (currentIndex + 1 === slides.length) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    moveSliderTrack(track, slides, currentIndex);
  };
};

const createSlider = (slider, dots) => {
  const track = slider.children[0];

  for (let index = 0; index < dots.length; index += 1) {
    const currentDot = dots[index];

    currentDot.onclick = () => {
      dots.map((dot) => dot.classList.remove('dots__dot--active'));

      currentDot.classList.add('dots__dot--active');

      moveSliderTrack(track, dots, index);
    };
  }

  const sliderArrow = slider.querySelector('.slider__arrow');
  if (sliderArrow !== null) {
    addArrowsFunctionality(slider, track);
  }
};

export default createSlider;
