import { showPopup } from "./modal.js";

// Кнопки открытия попапов
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const cardImageButtons = document.querySelectorAll(".card__image");

// Попапы
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

// Элементы внутри попапов
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const imagePopupImage = popupImage.querySelector(".popup__image");
const imagePopupCaption = popupImage.querySelector(".popup__caption");

// Формы
const formEditProfile = document.forms["edit-profile"];
const formAddCard = document.forms["new-place"];
  if (!formAddCard) {
    console.error("Форма с именем 'new-place' не найдена");
  }

// Открытие попапа редактирования профиля
editButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  showPopup(popupEdit);
});

// Открытие попапа добавления карточки
addButton.addEventListener("click", () => {
  formAddCard.reset();
  showPopup(popupAdd);
});

// Открытие попапа с изображением
cardImageButtons.forEach((cardImage) => {
  cardImage.addEventListener("click", () => {
    const src = cardImage.src;
    const alt = cardImage.alt;
    imagePopupImage.src = src;
    imagePopupImage.alt = alt;
    imagePopupCaption.textContent = alt;
    showPopup(popupImage);
  });
});

export function createCard(data, deleteCard, likeHandler, imagePopupImage, imagePopupCaption) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <button class="card__delete-button"></button>
    <img src="${data.link}" alt="${data.name}" class="card__image" />
    <div class="card__description">
      <h2 class="card__title">${data.name}</h2>
      <button class="card__like-button"></button>
    </div>
  `;

  // Лайк
  card.querySelector(".card__like-button").addEventListener("click", likeHandler);

  // Удаление
  card.querySelector(".card__delete-button").addEventListener("click", () =>
    deleteCard(card)
  );

  card.querySelector(".card__image").addEventListener("click", () => {
    imagePopupImage.src = data.link;
    imagePopupImage.alt = data.name;
    imagePopupCaption.textContent = data.name;
    showPopup(popupImage);
  });

  return card;
}

formAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = formAddCard.elements["card-name"].value;
  const link = formAddCard.elements["url"].value;
  const newCard = createCard({ name, link }, removeCard);
  placesList.prepend(newCard);
  formAddCard.reset();
  closePopup(popupAdd);
});

export function removeCard(cardElement) {
  cardElement.remove();
}

export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}