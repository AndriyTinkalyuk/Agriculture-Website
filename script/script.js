import { burgerMenu } from './modules/burgerMenu.js'

let iconMenu = document.getElementById('menu');
let menuBody = document.querySelector('.header_nav');
let tools = document.querySelector('.header_tools')

burgerMenu(iconMenu, menuBody, tools);

// потрібно переробити в модуль

let introBlock = document.querySelector('.welcome');
let animationPlayed = sessionStorage.getItem('animationPlayed');


if (!animationPlayed) {
  // Якщо анімація ще не програвалася
  document.body.classList.add('lock');
  introBlock.style.display = 'block';
  document.querySelector('.draw').addEventListener('animationend', (e) => {
    introBlock.style.display = 'none';
    document.body.classList.remove('lock');

    // Встановлюємо прапорець у sessionStorage
    sessionStorage.setItem('animationPlayed', 'true');
  });
} 


if (navigator.userAgent.includes('Telegram') || navigator.userAgent.includes('WebView')) {
  document.body.classList.add('telegram-webview');
}

