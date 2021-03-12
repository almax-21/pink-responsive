const likeButtons = document.querySelectorAll('.post__likes-button');
const counters = document.querySelectorAll('.post__likes-counter');

for (let i = 0; i < likeButtons.length; i += 1) {
  const currentLikeButton = likeButtons[i];
  const currentCounter = counters[i].querySelector('span');

  currentLikeButton.onclick = () => {
    const isPressed = currentLikeButton.getAttribute('aria-pressed') === 'true';
    const currentNumber = Number(currentCounter.textContent);

    if (isPressed) {
      currentCounter.textContent = String(currentNumber - 1);
    } else {
      currentCounter.textContent = String(currentNumber + 1);
    }

    currentLikeButton.classList.toggle('post__likes-button--added');
    currentLikeButton.setAttribute('aria-pressed', String(!isPressed));
  };
}
