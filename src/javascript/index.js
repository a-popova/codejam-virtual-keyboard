import '../sass/styles.scss';
import keyboard_rus from "./keyboard_rus";
import keyboard_us from "./keyboard_us";
import input from "./input";

window.onload = function() {
  this.document.body.innerHTML = input;
  this.document.body.innerHTML += keyboard_us;
  this.document.body.innerHTML += keyboard_rus;

  this.document.body.addEventListener("click", click);
  this.document.body.addEventListener("keydown", function(event){highlight(document.getElementById(event.code)); type(document.getElementById(event.code))});
  this.document.body.addEventListener("keyup", function(event){highlightOff(document.getElementById(event.code))});
}
var ctrl = false;
var shift = false;
var alt = false;

function highlight(node) {
   if (node.tagName === 'SPAN' || node.tagName === 'SUP'){
     node = node.parentElement;
   } 
   node.classList.add("active");
   result.focus();
}

function highlightOff(node){
  if (node.tagName === 'SPAN' || node.tagName === 'SUP'){
    node = node.parentElement;
  }
  node.classList.remove("active");

  ctrl = false;
  shift = false;
  alt = false;

  result.focus();
}

function type(char){
  console.log(char.textContent, char);
  var result = document.body.querySelector("#result");
  event.preventDefault();
  if (char.textContent === "Backspace"){
    result.value = result.value.substring(0, result.value.length-1);
  } else if (char.textContent === "ctrl"){
    ctrl = true; 
    switchLanguage();
  } else if (char.textContent === "Shift"){
    shift = true;
    switchLanguage();
  } else if (char.textContent === "alt"){
    alt = true;
  } else if (char.tagName === 'DIV'){
    char = char.firstElementChild;
    result.value += char.textContent;
  } else if (char.tagName === 'SUP'){
    char = char.previousElementSibling;
    result.value += char.textContent;
  } else {
    result.value += char.textContent;
  }
  result.focus();
}

function click (){
  let target = event.target;
  highlight(target);
  type(target);
  target = target.parentNode;
  result.focus();
}

function switchLanguage(){
  var keyboard = document.querySelectorAll(".keyboard");
  if (shift === true && ctrl === true){
    for (let i = 0; i < keyboard.length; i++){
      if (keyboard[i].classList.contains("hide")){
        keyboard[i].classList.remove("hide");
      } else {
        keyboard[i].classList.add("hide");
      }
    }
  }
  result.focus();
}