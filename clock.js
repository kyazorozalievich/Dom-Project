let hero = document.querySelector(".hero");
let seconds = document.querySelector(".second");
let minuts = document.querySelector(".minute");
let hours = document.querySelector(".hour");
let time = document.querySelector(".time");

let count = 0;
let scd = 90;
let min = 90;
let hor = 90;

let hr = 0;
let minuteCount = 0;
let sec = 0;

setInterval(() => {
  count++;
  scd += 6;
  second(scd);

  sec++;
  if (sec === 60) {
    sec = 0;
    minuteCount++;
    min += 6;
    minute(min);
  }

  if (minuteCount === 60) {
    minuteCount = 0;
    hr++;
    hor += 6;
    hour(hor);
  }

  time.textContent = `${String(hr).padStart(2, "0")}:${String(
    minuteCount
  ).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}, 1000);

function second(snd) {
  seconds.style.transform = `rotate(${snd}deg)`;
}

function minute(min) {
  minuts.style.transform = `rotate(${min}deg)`;
}

function hour(hor) {
  hours.style.transform = `rotate(${hor}deg)`;
}
