const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
const modalCloseButton = modal.querySelector(".modal__button");
const modalOverlay = document.querySelector(".overlay--modal");

const removeModal = () => {
  modal.classList.remove("modal--show");
  modalOverlay.classList.remove("overlay--reveal");
};

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  modalOverlay.classList.add("overlay--reveal");
});

modalCloseButton.onclick = () => {
  removeModal();
};

modalOverlay.onclick = () => {
  removeModal();
};

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    removeModal();
  }
});
