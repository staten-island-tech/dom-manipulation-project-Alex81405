const DOMSelectors = {
  albumName: document.querySelector("#title"),
  artist: document.querySelector("#artist"),
  url: document.querySelector("#url"),
  form: document.querySelector("form"),
  displayCard: document.querySelector("#display"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  getValues();
  clearText();
});

const getValues = function () {
  const album = DOMSelectors.albumName.value;
  const artist = DOMSelectors.artist.value;
  const url = DOMSelectors.url.value;
  DOMSelectors.displayCard.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
    <img class="display-img" src="${url}">
    <h2 class="display-artist">${artist}</h2>
    <h3 class="display-album">${album}</h3>
     <button class="remove btn">Remove Album</button>
    </div>`
  );
};

const clearText = function () {
  DOMSelectors.albumName.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
};

DOMSelectors.displayCard.addEventListener("click", function (el) {
  if (el.target.classList.contains("remove")) {
    const btn = el.target;
    const card = btn.parentElement;
    card.parentElement.removeChild(card);
  }
});
