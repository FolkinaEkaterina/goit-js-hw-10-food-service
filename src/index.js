import './sass/main.scss';
import './js/theme.js';
import menuTemplate from './templates/menu-template.hbs';
import menu from './js/menu.json';

const menuContainer = document.querySelector('ul.js-menu');
const cardsMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
  return menuTemplate(menu);
}
