const form = document.querySelector('.form');
const lastName = form.querySelector('#last-name');
const firstName = form.querySelector('#first-name');
const email = form.querySelector('#email');

const modal = document.querySelector('.modal');
const modalCloseButton = modal.querySelector('.modal__button');
const modalOverlay = document.querySelector('.overlay--modal');

let isStorageSupport = true;
let lastNameStorage = '';
let firstNameStorage = '';
let emailStorage = '';

try {
  lastNameStorage = localStorage.getItem('lastName');
  firstNameStorage = localStorage.getItem('firstName');
  emailStorage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (lastNameStorage) {
  lastName.value = lastNameStorage;
}
if (firstNameStorage) {
  firstName.value = firstNameStorage;
}
if (emailStorage) {
  email.value = emailStorage;
}

const removeModal = () => {
  modal.classList.remove('modal--show');
  modalOverlay.classList.remove('overlay--reveal');
};

form.onsubmit = (evt) => {
  evt.preventDefault();

  if (isStorageSupport) {
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('email', email.value);
  }

  modal.classList.add('modal--show');
  modalOverlay.classList.add('overlay--reveal');
};

modalCloseButton.onclick = () => {
  removeModal();
};

modalOverlay.onclick = () => {
  removeModal();
};

window.onkeydown = (evt) => {
  if (evt.key === 'Escape') {
    removeModal();
  }
};
