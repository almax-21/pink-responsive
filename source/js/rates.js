/* eslint-disable import/no-unresolved, import/extensions */

import createSlider from './createSlider.min.js';

const ratesWrapper = document.querySelector('.rates__wrapper');
const dotsCollection = document.querySelector('.rates__dots').children;
const dots = Array.from(dotsCollection);

createSlider(ratesWrapper, dots);
