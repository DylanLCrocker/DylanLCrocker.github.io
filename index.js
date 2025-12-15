
/* 

 to add ballon game back

 let fontSize = 10;

let balloonEl = document.getElementById("balloon")
function ballonKeyDown(event) {
  if (event.key == "o") {
    fontSize *= 1.1;
    balloonEl.style.fontSize = fontSize + "px";
    event.preventDefault();

  }
  if (event.key == "p") {
    fontSize /= 1.1;
    balloonEl.style.fontSize = fontSize + "px";
    event.preventDefault();
  }
}
window.addEventListener("keydown", ballonKeyDown);

Paste in HTML:

    <p id="balloon">🎈</p>
    <script src="index.js"></script>
    
    */