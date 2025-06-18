const ESC_CODE = 27;

// Функция открытия попапа
export function showPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
  popup.addEventListener("click", closePopupByOverlay);
}

// Функция закрытия попапа
export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
  popup.removeEventListener("click", closePopupByOverlay);
}

// Закрытие по Esc
export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    if (popup) closePopup(popup);
  }
}

// Закрытие по клику на оверлей
function closePopupByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}