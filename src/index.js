import './sass/main.scss';
import menuTemplate from './templates/menu-template.hbs';
import menu from './js/menu.json';

const menuContainer = document.querySelector('ul.js-menu');
const cardsMarkup = createMenuCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
  return menuTemplate(menu);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const refs = {
//   body: document.querySelector('body'),
//   themeSwitch: document.querySelector('#theme-switch-toggle'),
// };

// themeDefaultSetting();

// refs.themeSwitch.addEventListener('change', onThemeSwitchChange);

// function onThemeSwitchChange() {
//   refs.body.classList.toggle(Theme.DARK);

//   if (refs.body.classList.contains(Theme.DARK)) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

// function themeDefaultSetting() {
//   if (!localStorage.length) {
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
//   refs.body.classList.add(localStorage.getItem('theme'));
// }
