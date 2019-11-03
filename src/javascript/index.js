import '../sass/styles.scss';
import keyboard_us from "./keyboard_us";
import keyboard_rus from "./keyboard_rus";
import input from "./input";

window.onload = function() {
  this.document.body.innerHTML = input;
  this.document.body.innerHTML += keyboard_us;
  this.document.body.innerHTML += keyboard_rus;

  this.document.body.addEventListener("click", click);
  this.document.body.addEventListener("keydown", function(event){highlight(document.getElementById(event.code)), type(document.getElementById(event.code)), remove(document.getElementById(event.code))});
  this.document.body.addEventListener("keyup", function(event){highlightOff(document.getElementById(event.code))});
}

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
  result.focus();
}

function typeVirtual(char){
  var result = document.body.querySelector("#result");
  result.setAttribute("readonly", true);
  if (char.tagName === 'DIV'){
    char = char.firstElementChild;
  } else if (char.tagName === 'SUP'){
    char = char.previousElementSibling;
  } else if (char.textContent === "Backspace"){
    remove(char.textContent);
  }
  result.value += char.textContent;
  result.focus();
}

function type(char){
  result.setAttribute("readonly", true);
  if (char.tagName === 'DIV'){
    char = char.firstElementChild;
  } else if (char.tagName === 'SUP'){
    char = char.previousElementSibling;
  }
  result.value += char.textContent;
  result.focus();
}

function remove(char) {
  if (char === "Backspace"){
    result.value.substring(0, result.value.length-1);
  }
}

function click (){
  let target = event.target;
  highlight(target);
  typeVirtual(target);
  target = target.parentNode;
  result.focus();
}