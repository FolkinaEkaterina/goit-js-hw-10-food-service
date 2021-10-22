const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

themeDefaultSetting();

refs.themeSwitch.addEventListener('change', onThemeSwitchChange);

// добавление классов на body при переключении темы

function onThemeSwitchChange() {
  if (refs.body.classList.toggle(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
  }
}

// создание светлой темы по умолчанию

function themeDefaultSetting() {
  if (!localStorage.length) {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  refs.body.classList.add(localStorage.getItem('theme'));
}

// добавление свойства checked для правильного положения ползунка при темной теме

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.themeSwitch.checked = true;
}
