import '../sass/styles.scss';
import keyboard_us from "./keyboard_us";
import keyboard_rus from "./keyboard_rus";
import input from "./input";

window.onload = function() {
  this.document.body.innerHTML = input;
  this.document.body.innerHTML += keyboard_us;
  this.document.body.innerHTML += keyboard_rus;

}
