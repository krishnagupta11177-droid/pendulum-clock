const body = document.querySelector("body");
const handleBar = document.querySelector(".handle-bar");
const clockBody = document.querySelector(".clock-body");
const borderEffect = document.querySelector(".border-effect");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondsHand = document.querySelector(".second");
const tick = document.querySelector(".tick-audio");

body.addEventListener("click", () => {
  tick.play();
});

function setDate() {
  const now = new Date();
  let getSeconds = now.getSeconds();
  let getMinutes = now.getMinutes();
  let getHours = now.getHours();

  secondsHand.style.transform = `rotate(${getSeconds * 6}deg)`;
  minuteHand.style.transform = `rotate(${getMinutes * 6}deg)`;
  hourHand.style.transform = `rotate(${getHours * 30}deg)`;
}

setInterval(setDate, 1000);

setTimeout(() => {
  clockBody.classList.add("active");
  handleBar.classList.add("active");
}, 500);

setTimeout(() => {
  borderEffect.classList.add("active");
}, 1500);
