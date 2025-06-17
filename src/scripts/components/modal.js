// открытие попапа
function openModal(modal) {
  modal.classList.add('popup_is-opened' , 'popup_is-animated');
  document.addEventListener('keydown', closeModalWithEsc);
}