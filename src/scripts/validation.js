const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-32",
  headers: {
    authorization: "e8415454-1b42-49ab-bebb-f4215eb21dcc",
    "Content-Type": "application/json",
  },
};

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
}

export function getUserInf() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(handleResponse)
    .catch(err => {
      console.error("Failed to get user info:", err);
      throw err;
    });
}

const controller = new AbortController();

export function getInitialCards(signal) {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    signal,
  }).then(handleResponse);
}

getInitialCards(controller.signal).catch(err => {
  if (err.name === 'AbortError') {
    console.log('Request was aborted');
  } else {
    console.error(err);
  }
});

export function profileEdit(name, description) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: description,
    }),
  }).then(handleResponse);
}

export function createUserCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(handleResponse);
}

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
}

export function addLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(handleResponse);
}

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
}

export function editAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(handleResponse);
}