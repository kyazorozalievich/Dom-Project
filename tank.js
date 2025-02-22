const tank = document.querySelector(".allTank");
const topButton = document.querySelector(".top");
const rightButton = document.querySelector(".right");
const bottomButton = document.querySelector(".bottom");
const leftButton = document.querySelector(".left");
const fire = document.querySelector(".fire");
const atom = document.querySelector(".atom");
let positionX = 0;
let positionY = 0;

function moveTank() {
  tank.style.left = `${positionX}px`;
  tank.style.top = `${positionY}px`;
}

topButton.addEventListener("click", () => {
  positionY -= 10;
  tank.style.transform = "rotate(90deg)";
  moveTank();
});

bottomButton.addEventListener("click", () => {
  positionY += 10;
  tank.style.transform = "rotate(270deg)";
  moveTank();
});

leftButton.addEventListener("click", () => {
  positionX -= 10;
  tank.style.transform = "rotate(360deg)";
  moveTank();
});

rightButton.addEventListener("click", () => {
  positionX += 10;
  tank.style.transform = "rotate(180deg)";
  moveTank();
});
atom.style.display = "none";
atom.style.right = "500px";
fire.style.display = "none";

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      positionY -= 20;
      tank.style.transform = "rotate(90deg)";
      atom.style.transform = "rotate(270deg)";
      moveTank();
      break;
    case "ArrowDown":
      positionY += 20;
      tank.style.transform = "rotate(270deg)";
      atom.style.transform = "rotate(180deg)";
      moveTank();
      break;
    case "ArrowLeft":
      positionX -= 20;
      tank.style.transform = "rotate(360deg)";
      atom.style.transform = "rotate(360deg)";
      moveTank();
      break;
    case "ArrowRight":
      positionX += 20;
      tank.style.transform = "rotate(180deg)";
      atom.style.transform = "rotate(180deg)";
      moveTank();
      break;
    case "Enter":
      fire.style.display = "block";
      fire.style.right = "500px";
      fire.style.transition = "2s";
      setTimeout(() => {
        atom.style.display = "block";
        fire.style.display = "none";
      }, 2000);
      setTimeout(() => {
        atom.style.display = "none";
      }, 3500);
  }
});
