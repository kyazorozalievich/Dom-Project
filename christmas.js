let one = document.querySelectorAll(".one div");
let btn = document.querySelector(".christmas");
let balls = document.querySelectorAll(".posoh div");
let saluts = document.querySelectorAll(".saluts img");
let iskra = document.querySelector(".iskra");

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", () => {
  //
  function randomBlockColors() {
    one.forEach((el) => {
      el.style.background = randomColor();
    });
    balls.forEach((el) => {
      el.style.background = randomColor();
    });
  }
  setInterval(() => {
    randomBlockColors();
  }, 500);
  //

  //
  saluts.forEach((el, id) => {
    if (id === 0) {
      setTimeout(() => {
        el.style.bottom = "600px";
        el.style.transition = "0.8s";
      }, 1000);
      setTimeout(() => {
        el.style.display = "none";
        iskra.style.display = "block";
        iskra.style.width = "300px";
        iskra.style.height = "300px";
        iskra.style.transition = "0.2s";
      }, 1500);
      setTimeout(() => {
        iskra.style.display = "none";
      }, 2000);
    }
    if (id === 1) {
      setTimeout(() => {
        el.style.bottom = "600px";
        el.style.transition = "0.8s";
      }, 2500);
      setTimeout(() => {
        el.style.display = "none";
        iskra.style.display = "block";
        iskra.style.width = "300px";
        iskra.style.height = "300px";
        iskra.style.transition = "0.2s";
      }, 3000);
      setTimeout(() => {
        iskra.style.display = "none";
      }, 3500);
    }
    if (id === 2) {
      setTimeout(() => {
        el.style.bottom = "600px";
        el.style.transition = "0.8s";
      }, 3500);
      setTimeout(() => {
        el.style.display = "none";
        iskra.style.display = "block";
        iskra.style.width = "300px";
        iskra.style.height = "300px";
        iskra.style.transition = "0.2s";
      }, 4000);
      setTimeout(() => {
        iskra.style.display = "none";
      }, 4500);
    }
    if (id === 3) {
      setTimeout(() => {
        el.style.bottom = "600px";
        el.style.transition = "0.8s";
      }, 4500);
      setTimeout(() => {
        el.style.display = "none";
        iskra.style.display = "block";
        iskra.style.width = "300px";
        iskra.style.height = "300px";
        iskra.style.transition = "0.2s";
      }, 5000);
      setTimeout(() => {
        iskra.style.display = "none";
      }, 5500);
    }
  });
  //
});
