const editPopup = document.querySelector('#editPopup');
const profileEdit = document.querySelector('#profileEdit');

profileEdit.addEventListener('click', function () {
  popupOpen(editPopup);
});

const popupCloseButton = document.querySelector('#popupCloseButton');
popupCloseButton.addEventListener ('click', function () {
  popupClose(editPopup);
});

function popupOpen(popup) {
  editPopup.classList.remove('popup-hidden');
}

function popupClose(popup) {
  editPopup.classList.add('popup-hidden');
}


let popupSubmit = document.querySelector('#formElement');
let infoName = document.querySelector('#infoName');
let infoDescription = document.querySelector('#infoDescription');

function formSubmitHandler (evt) {
  evt.preventDefault();

  let nameInput = document.querySelector('#nameInput');
  let jobInput = document.querySelector('#jobInput');

  infoName.textContent = nameInput.value;
  infoDescription.textContent = jobInput.value;

  popupClose();
}


formElement.addEventListener('submit', formSubmitHandler);``