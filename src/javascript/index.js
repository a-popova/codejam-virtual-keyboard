import '../sass/styles.scss';
import keyboardRus from './keyboard_rus';
import keyboardUs from './keyboard_us';
import input from './input';



var language = 'us-';
function getKeyboardLanguage() {
  const keyboard = document.querySelectorAll('.keyboard');
  if (keyboard[0].classList.contains('hide')) {
    language = 'rus-';
  } else if (keyboard[1].classList.contains('hide')) {
    language = 'us-';
  }
}

let ctrl = false;
let shift = false;
let caps = false;

function highlight(node) {
  node.classList.add('active', 'move');
}

function highlightOnClick(node) {
  if (node.tagName === 'SPAN' || node.tagName === 'SUP') {
    node = node.parentElement;
  }
  if (node.tagName !== 'TEXTAREA') {
    node.classList.add('active', 'move');
  }
  if (node.textContent !== 'Caps Lock') {
    setTimeout(() => {
      node.classList.remove('active', 'move');
    }, 300);
  }
}

function highlightOff(node) {
  if (node.tagName === 'SPAN' || node.tagName === 'SUP') {
    node = node.parentElement;
  }
  if (node.textContent !== 'Caps Lock') {
    node.classList.remove('active', 'move');
  }

  ctrl = false;
  shift = false;
}

function type(char) {
  const result = document.body.querySelector('#result');
  if (char.textContent === 'Backspace') {
    result.value = result.value.substring(0, result.value.length - 1);
  } else if (char.textContent === 'ctrl') {
    ctrl = true;
    switchLanguage();
  } else if (char.textContent === 'Shift') {
    shift = true;
    switchLanguage();
  }  else if (char.textContent === 'Enter') {
    result.value += '\n';
  } else if (char.textContent === 'Caps Lock') {
    if (caps === false) {
      highlight(char);
      caps = true;
    } else {
      caps = false;
      char.classList.remove('active', 'move');
    }
  } else if (char.textContent === '' && char.tagName !== 'TEXTAREA') {
    result.value += ' ';
  } else if (char.tagName === 'DIV') {
    if (shift === true) {
      char = char.lastElementChild;
      result.value += char.textContent.toUpperCase();
    } else if (caps === true) {
      char = char.firstElementChild;
      result.value += char.textContent.toUpperCase();
    } else {
      char = char.firstElementChild;
      result.value += char.textContent;
    }
  } else if (char.tagName === 'SUP') {
    char = char.previousElementSibling;
    result.value += char.textContent;
  } else {
    result.value += char.textContent;
  }
  result.focus();
}

function click() {
  let { target } = event;
  if (target.tagName !== 'BODY') {
    highlightOnClick(target);
    type(target);
  }
  target = target.parentNode;
}

function switchLanguage() {
  const keyboardView = document.querySelectorAll('.keyboard');
  if (shift === true && ctrl === true) {
    for (let i = 0; i < keyboardView.length; i++) {
      if (keyboardView[i].classList.contains('hide')) {
        keyboardView[i].classList.remove('hide');
      } else {
        keyboardView[i].classList.add('hide');
      }
    }
  }
  getKeyboardLanguage();
  localStorage.setItem('language', language);
}

window.onload = function () {
  this.document.body.innerHTML = input;
  this.document.body.innerHTML += keyboardUs;
  this.document.body.innerHTML += keyboardRus;

  const keyboard = document.querySelectorAll('.keyboard');

  if (localStorage.getItem('language' === 'us-')) {
    keyboard[1].classList.add('hide');
  } else if (localStorage.getItem('language') === 'rus-') {
    keyboard[0].classList.add('hide');
  } else {
    keyboard[1].classList.add('hide');
  }

  document.body.addEventListener('keydown', (event) => { getKeyboardLanguage(); event.preventDefault(); highlight(document.getElementById(`${language}${event.code}`)); type(document.getElementById(`${language}${event.code}`)); });
  document.body.addEventListener('keyup', (event) => { getKeyboardLanguage(); highlightOff(document.getElementById(`${language}${event.code}`)); });

  this.document.body.addEventListener('click', () => { click(); });
};