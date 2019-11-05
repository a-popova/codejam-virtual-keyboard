import '../sass/styles.scss';
import keyboardRus from './keyboard_rus';
import keyboardUs from './keyboard_us';
import input from './input';


let language = 'us-';
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
let capsCount = 0;

function highlight(node) {
  node.classList.add('active', 'move');
}

function highlightOnClick(node) {
  let symbol = node;
  if (symbol.textContent === 'Caps Lock') {
    capsCount += 1;
    if (capsCount % 2 === 0) {
      if (symbol.tagName === 'SPAN') {
        symbol = symbol.parentElement;
      }
      symbol.classList.remove('active', 'move');
    } else {
      if (symbol.tagName === 'SPAN') {
        symbol = symbol.parentElement;
      }
      symbol.classList.add('active', 'move');
    }
  } else if (symbol.tagName === 'SPAN' || symbol.tagName === 'SUP') {
    symbol = symbol.parentElement;
    symbol.classList.add('active', 'move');
  } else if (symbol.tagName !== 'TEXTAREA' || symbol.tagName !== 'H4') {
    symbol.classList.add('active', 'move');
  }
  // if (symbol.textContent !== 'Caps Lock') {
  //   setTimeout(() => {
  //     symbol.classList.remove('active', 'move');
  //   }, 300);
  // }
}

function highlightOff(node) {
  let symbol = node;
  if (symbol.tagName === 'SPAN' || symbol.tagName === 'SUP') {
    symbol = symbol.parentElement;
  }
  if (symbol.textContent !== 'Caps Lock') {
    symbol.classList.remove('active', 'move');
  }

  ctrl = false;
  shift = false;
}

function switchLanguage() {
  const keyboardView = document.querySelectorAll('.keyboard');
  if (shift === true && ctrl === true) {
    for (let i = 0; i < keyboardView.length; i += 1) {
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

function type(char) {
  let symbol = char;
  const result = document.body.querySelector('#result');
  if (symbol.textContent === 'Backspace') {
    result.value = result.value.substring(0, result.value.length - 1);
  } else if (symbol.textContent === 'ctrl') {
    ctrl = true;
    switchLanguage();
  } else if (symbol.textContent === 'Shift') {
    shift = true;
    switchLanguage();
  } else if (symbol.textContent === 'Enter') {
    result.value += '\n';
  } else if (symbol.textContent === 'Caps Lock') {
    if (caps === false) {
      highlight(symbol);
      caps = true;
    } else {
      caps = false;
      symbol.classList.remove('active', 'move');
    }
  } else if (symbol.textContent === '' && symbol.tagName !== 'TEXTAREA') {
    result.value += ' ';
  } else if (symbol.tagName === 'H4') {
    result.focus();
  } else if (symbol.tagName === 'DIV') {
    if (shift === true) {
      symbol = symbol.lastElementChild;
      result.value += symbol.textContent.toUpperCase();
    } else if (caps === true) {
      symbol = symbol.firstElementChild;
      result.value += symbol.textContent.toUpperCase();
    } else {
      symbol = symbol.firstElementChild;
      result.value += symbol.textContent;
    }
  } else if (symbol.tagName === 'SUP') {
    symbol = symbol.previousElementSibling;
    result.value += symbol.textContent;
  } else if (caps === true) {
    result.value += symbol.textContent.toUpperCase();
  } else {
    result.value += symbol.textContent;
  }
  result.focus();
}

function click(event) {
  if (event.target.tagName !== 'BODY') {
    highlightOnClick(event.target);
    type(event.target);
  }
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

  this.document.body.addEventListener('mousedown', (event) => { click(event); });
  this.document.body.addEventListener('click', (event) => { highlightOff(event.target); });
};
