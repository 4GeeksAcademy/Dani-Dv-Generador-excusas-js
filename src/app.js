import "bootstrap";
import "./style.css";

window.onload = function () {
  //write your code here
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function randWord(arr){
    return arr[Math.floor(Math.random()*arr.length)]
  }

  let Random = `${randWord(who)} ${randWord(action)} ${randWord(what)} ${randWord(when)}`

  console.log("Hello Rigo from the console!");
  
  document.getElementById('excuse').innerHTML = Random
  

};
