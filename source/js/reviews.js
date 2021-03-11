/* eslint-disable import/no-unresolved, import/extensions */

import createSlider from './createSlider.min.js';

const sliderContainer = document.querySelector('.slider__container');
const dotsCollection = document.querySelector('.slider__dots').children;
const dots = Array.from(dotsCollection);

createSlider(sliderContainer, dots);
