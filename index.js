let fontSize = 10;
const backBtn = document.getElementById("backBtn");
const homeBtn = document.getElementById("homeBtn");

backBtn.addEventListener("click", () => {
history.back(-1);
});

homeBtn.addEventListener("click", () => {
"../index.html";
});



let balloonEl = document.getElementById("balloon")
function handleKeyDown(event) {
  if (event.key == "ArrowUp") {
    fontSize *= 1.1;
    balloonEl.style.fontSize = fontSize + "px";
    event.preventDefault();

  }
  if (event.key == "ArrowDown") {
    fontSize /= 1.1;
    balloonEl.style.fontSize = fontSize + "px";
    event.preventDefault();
  }
}
window.addEventListener("keydown", handleKeyDown);