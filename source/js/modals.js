const form = document.querySelector(".form");
const formSubmitButton = form.querySelector(".form__button");

const modals = document.querySelectorAll('.modal');
const modalError = document.querySelector(".modal--error");
const modalSuccess = document.querySelector(".modal--success");
const modalCloseButtons = document.querySelectorAll(".modal__button");
const modalOverlay = document.querySelector(".overlay--modal");

formSubmitButton.onclick = function () {
  modalError.classList.add("modal--show");
  modalOverlay.classList.add("overlay--reveal");
};

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  modalError.classList.remove("modal--show");
  modalSuccess.classList.add("modal--show");
  modalOverlay.classList.add("overlay--reveal");
});

const addClickOnCloseBtn = (button) => {
  button.onclick = function () {
    modals.forEach(modal => modal.classList.remove("modal--show"));
    modalOverlay.classList.remove("overlay--reveal");
  };
};

for (let i = 0; i < modalCloseButtons.length; i += 1) {
  addClickOnCloseBtn(modalCloseButtons[i]);
  modalOverlay.classList.remove("overlay--reveal");
}

modalOverlay.onclick = function () {
  modals.forEach(modal => modal.classList.remove("modal--show"));
  modalOverlay.classList.remove("overlay--reveal");
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modals.forEach(modal => modal.classList.remove("modal--show"));
    modalOverlay.classList.remove("overlay--reveal");
  }
});