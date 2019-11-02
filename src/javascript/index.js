import '../sass/styles.scss';
import keyboard_us from "./keyboard_us";
import keyboard_rus from "./keyboard_rus";
import input from "./input";

window.onload = function() {
  this.document.body.innerHTML = input;
  this.document.body.innerHTML += keyboard_us;
  this.document.body.innerHTML += keyboard_rus;

  this.document.body.addEventListener("click", click);
  this.document.body.addEventListener("keydown", function(event){highlight(document.getElementById(event.code)), type(document.getElementById(event.code))});
}
//type(document.getElementById(event.code))
function click (){
  let target = event.target;
  highlight(target);
  type(target);
  target = target.parentNode;
  
}

function highlight(node) {
   if (node.tagName === 'SPAN' || node.tagName === 'SUP'){
     node = node.parentElement;
   } 
   node.classList.add("active")
   let t = setTimeout(function(){
    node.classList.remove("active");
   },(200));   
}

function type(char){
  let result = document.body.querySelector("#result");
  if (char.tagName === 'DIV'){
    char = char.firstElementChild;
  } else if (char.tagName === 'SUP'){
    char = char.previousElementSibling;
  } 
  result.value += char.textContent;
}