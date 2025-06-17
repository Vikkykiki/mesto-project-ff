import './styles/index.css';
import './index.js';

const cards = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');
const addButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupAddCardButton = popupAddCard.querySelector('.popup__button');
const popupAddCardNameInput = popupAddCard.querySelector('.popup__input_type_card-name');
const popupAddCardLinkInput = popupAddCard.querySelector('.popup__input_type_url');


function createCardElement(cardData, buttonDelete) {
    const cardElement = cards.content.cloneNode(true).querySelector('.card');

    const cardName = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    
    cardImage.src = cardData.link;
    cardImage.alt = `Изображение места: ${cardData.name}`; 
    cardName.textContent = cardData.name;
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener ('click',() => {
        buttonDelete(cardElement);  
    });
    return cardElement;
};

initialCards.forEach(cardData => {
    const cardElement = createCardElement(cardData, removeCard);
    placesList.appendChild(cardElement);
});

function removeCard(cardElement) {
    cardElement.remove();
};

addButton.addEventListener ('click',() => {
    popupAddCardNameInput.value = "";
    popupAddCardLinkInput.value = "";
    popupAddCard.style.display = "flex";
});


popupAddCardButton.addEventListener ('click', (event) => {
    event.preventDefault();
    let name = popupAddCardNameInput.value;
    let link = popupAddCardLinkInput.value;
    const cardElement = createCardElement({name: name, link: link}, removeCard);
    placesList.appendChild(cardElement);
    popupAddCard.style.display = "none";
});

const numbers = [2, 3, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10


// const jordanImage = new URL('./images/jordan.jpg', import.meta.url);
// const jamesImage = new URL('./images/james.jpg', import.meta.url);
// const bryantImage = new URL('./images/bryant.jpg', import.meta.url)

// const whoIsTheGoat = [
//   { name: 'Michael Jordan', link: jordanImage },
//   { name: 'Lebron James', link: jamesImage },
//   { name: 'Kobe Bryant', link: bryantImage },
// ]; 
