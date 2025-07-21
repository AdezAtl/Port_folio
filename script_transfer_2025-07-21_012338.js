

const words = ["a Developer", "a Designer", "a Creator", "an Innovator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const eraseSpeed = 50;
const delayBetweenWords = 2000;
const textElement = document.getElementById("typewriter-text");

function typeEffect() {
const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);

  textElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, typeSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, eraseSpeed);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, typeSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  } else {
    console.warn("Element(s) missing: 'menu-toggle' or 'nav-links'");
  }
});

const icon = document.getElementById('theme-icon');
const logo = document.getElementById('logo');

window.onload = () => {
  const mode = localStorage.getItem('theme');
  if (mode === 'dark') {
    applyDarkMode();
  } else {
    applyLightMode();
  }
};

function toggleMode() {
  if (document.body.classList.contains('dark-mode')) {
    applyLightMode();
    localStorage.setItem('theme', 'light');
  } else {
    applyDarkMode();
    localStorage.setItem('theme', 'dark');
  }
}

function applyDarkMode() {
  document.body.classList.add('dark-mode');
  icon.src = 'dark_theme.png';
  logo.src = 'dark-logo.png';
}

function applyLightMode() {
  document.body.classList.remove('dark-mode');
  icon.src = 'light_theme.png';
  logo.src = 'light-logo.png';
}

