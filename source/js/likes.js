/* eslint-disable no-plusplus */

const likeButtons = document.querySelectorAll('.post__likes-button');
const counters = document.querySelectorAll('.post__likes-counter');

for (let i = 0; i < likeButtons.length; i += 1) {
  const currentLikeButton = likeButtons[i];
  const currentNumber = counters[i].querySelector('span');

  currentLikeButton.onclick = (evt) => {
    const isPressed = evt.target.getAttribute('aria-pressed') === 'true';

    if (isPressed) {
      currentNumber.textContent--;
    } else {
      currentNumber.textContent++;
    }

    evt.target.setAttribute('aria-pressed', String(!isPressed));
    currentLikeButton.classList.toggle('post__likes-button--added');
  };
}
