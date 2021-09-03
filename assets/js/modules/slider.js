import { Gallery } from "./GalleryCarrousel.js";

export const views = {
  LEFT: "leftView",
  MIDDLE: "mainView",
  RIGHT: "rightView"
}

const gallery = new Gallery();
const slider = document.querySelector('.slider')

/* Conexão da API do Orbital (Spring boot) */
function connectGallery() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://orbital-api.herokuapp.com/api/estudante");
  xhr.addEventListener("load", () => gallery.start(JSON.parse(xhr.responseText)));
  xhr.send();
}

export function loadGallery() {
  transitionCards()
  connectGallery();
}

function transitionCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.add('transition'));
  setTimeout(() => cards.forEach(card => card.classList.remove('transition')), 501);
};

function scrollRight() {
  gallery.next();
};

function scrollLeft() {
  gallery.prev();
};

export function changeView(viewName, object) {
  let view = document.getElementById(viewName);
  view.querySelector('.card-img').style.backgroundImage = `url(${object.image})`;
  view.querySelector('.card-title').textContent = object.name;

  let linkedIn = view.querySelector('.linkedin');
  linkedIn.querySelector('.text').textContent = object.linkedin.name;
  linkedIn.querySelector('a').href = object.linkedin.url;

  let instagram = view.querySelector('.instagram');
  instagram.querySelector('.text').textContent = object.instagram.name;
  instagram.querySelector('a').href = object.instagram.url;

  let github = view.querySelector('.github');
  github.querySelector('.text').textContent = object.github.name;
  github.querySelector('a').href = object.github.url;

  let whatsapp = view.querySelector('.whatsapp');
  whatsapp.querySelector('.text').textContent = object.whatsapp.url;
}

export function listenerScroll() {
  document.getElementById("navRight").addEventListener("click", scrollRight);
  document.getElementById("navLeft").addEventListener("click", scrollLeft);
  document.getElementById("rightView").addEventListener("click", scrollRight);
  document.getElementById("leftView").addEventListener("click", scrollLeft);
  document.addEventListener('keyup', e => (e.keyCode === 37) 
            ? scrollLeft() 
            : (e.keyCode === 39) ? scrollRight(): undefined);
}