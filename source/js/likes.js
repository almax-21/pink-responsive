const likeButtons = document.querySelectorAll(".post__likes-button");
const counters = document.querySelectorAll(".post__likes-counter");

const addLikeClickHandler = function (button, counter) {
  const currentNumber = counter.querySelector('span');

  button.addEventListener('click', function () {
    if (button.classList.contains('post__likes-button--added')) {
      currentNumber.textContent--;
    } else {
      currentNumber.textContent++;
    }

    button.classList.toggle('post__likes-button--added');
  });
};

for (let i = 0; i < likeButtons.length; i += 1) {
  addLikeClickHandler(likeButtons[i], counters[i]);
}
