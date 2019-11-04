import '../sass/styles.scss';
import keyboard_rus from "./keyboard_rus";
import keyboard_us from "./keyboard_us";
import input from "./input";

window.onload = function() {
  this.document.body.innerHTML = input;
  this.document.body.innerHTML += keyboard_us;
  this.document.body.innerHTML += keyboard_rus;

  var keyboard = document.querySelectorAll(".keyboard");
  if (keyboard[0].classList.contains("hide")){
    document.body.addEventListener("keydown", function(event){event.preventDefault(); highlight(document.getElementById(`rus-${event.code}`)); type(document.getElementById(`rus-${event.code}`))});
    document.body.addEventListener("keyup", function(event){highlightOff(document.getElementById(`rus-${event.code}`))});
  } else if(keyboard[1].classList.contains("hide")) {
    document.body.addEventListener("keydown", function(event){event.preventDefault(); highlight(document.getElementById(`us-${event.code}`)); type(document.getElementById(`us-${event.code}`))});
    document.body.addEventListener("keyup", function(event){highlightOff(document.getElementById(`us-${event.code}`))}); 
  }

  this.document.body.addEventListener("click", click);
}

var ctrl = false;
var shift = false;
var alt = false;
let caps= false;

function highlight(node) {
   node.classList.add("active", "move");
   result.focus();
}

function highlightOnClick(node){
  if (node.tagName === 'SPAN' || node.tagName === 'SUP'){
    node = node.parentElement;
  } 
  if (node.tagName !== "TEXTAREA"){
    node.classList.add("active", "move");
  }
  if (node.textContent !== "Caps Lock"){
   setTimeout (function(){
     node.classList.remove("active", "move");
   }, 300)
 }
  result.focus();
}

function highlightOff(node){
  if (node.tagName === 'SPAN' || node.tagName === 'SUP'){
    node = node.parentElement;
  }
  if (node.textContent !== "Caps Lock"){
    node.classList.remove("active", "move");
  }

  ctrl = false;
  shift = false;
  alt = false;

  result.focus();
}

function type(char){
  console.log(char.textContent);
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
  } else if (char.textContent === "Enter"){
    result.value += '\n';
  } else if (char.textContent === "Caps Lock"){
    if (caps === false){
      highlight(char);
      caps = true;
    } else {
      caps = false; 
      char.classList.remove("move");
    }
  }  else if (char === document.querySelector(".space")){
    result.value += ' ';
  } else if (char.tagName === 'DIV'){
    if (shift === true){
      if (char.parentNode === document.querySelector(".row")){
        char = char.lastElementChild;
        result.value += char.textContent;
      } else {
        char = char.firstElementChild;
        result.value += char.textContent.toUpperCase();
      }
    } else if(caps === true){
      char = char.firstElementChild;
      result.value += char.textContent.toUpperCase();
    } else {
      char = char.firstElementChild;
      result.value += char.textContent;
    }
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
  if (target.tagName !== "BODY"){
    highlightOnClick(target);
    type(target);
  }
  target = target.parentNode;
  result.focus();
}

function switchLanguage(){
  let keyboardView = document.querySelectorAll(".keyboard");
  if (shift === true && ctrl === true){
    for (let i = 0; i < keyboardView.length; i++){
      if (keyboardView[i].classList.contains("hide")){
        keyboardView[i].classList.remove("hide");
      } else {
        keyboardView[i].classList.add("hide");
      }
    }
  }
  result.focus();
}