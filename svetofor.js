let topCars = document.querySelectorAll(".top img");
let leftCars = document.querySelectorAll(".left img");
let topLight = document.querySelectorAll(".lightTop div");
let leftLight = document.querySelectorAll(".lightLeft div");
let btn = document.querySelector(".btn");

console.log(topLight);

btn.addEventListener("click", () => {
  topCars.forEach((el, id) => {
    if (id === 0 || id === 1) {
      setTimeout(() => {
        el.style.top = "240px";
        el.style.transition = "3s";
      }, 500);
      setTimeout(() => {
        el.style.top = "500px";
        el.style.transition = "3s";
      }, 3000);
    }
    if (id === 2 || id === 3) {
      el.style.top = "550px";
      el.style.transition = "2s";
    }
  });
  topLight.forEach((el, id) => {
    id === 2 ? (el.style.background = "green") : null;
    setTimeout(() => {
      id === 0 ? (el.style.background = "red") : (el.style.background = "gray");
    }, 1000);
    setTimeout(() => {
      id === 1
        ? (el.style.background = "yellow")
        : (el.style.background = "gray");
    }, 2000);
    setTimeout(() => {
      id === 2
        ? (el.style.background = "green")
        : (el.style.background = "gray");
    }, 3000);
    setTimeout(() => {
      id === 0 ? (el.style.background = "red") : (el.style.background = "gray");
    }, 4000);
    setTimeout(() => {
      id === 1
        ? (el.style.background = "yellow")
        : (el.style.background = "gray");
    }, 5000);
    setTimeout(() => {
      id === 2
        ? (el.style.background = "green")
        : (el.style.background = "gray");
    }, 6000);
    setTimeout(() => {
      el.style.background = "gray";
    }, 8000);
  });

  leftCars.forEach((el, id) => {
    if (id === 0 || id === 1) {
      setTimeout(() => {
        el.style.left = "250px";
        el.style.transition = "2s";
      }, 3000);
      setTimeout(() => {
        el.style.left = "600px";
        el.style.transition = "2s";
      }, 6000);
    }
    if (id === 2 || id === 3) {
      setTimeout(() => {
        el.style.left = "650px";
        el.style.transition = "3s";
      }, 2000);
      el.style.left = "250px";
      el.style.transition = "2s";
    }
  });
  leftLight.forEach((el, id) => {
    id === 0 ? (el.style.background = "red") : null;
    setTimeout(() => {
      id === 1
        ? (el.style.background = "yellow")
        : (el.style.background = "gray");
    }, 1000);
    setTimeout(() => {
      id === 2
        ? (el.style.background = "green")
        : (el.style.background = "gray");
    }, 2000);
    setTimeout(() => {
      id === 0 ? (el.style.background = "red") : (el.style.background = "gray");
    }, 3000);
    setTimeout(() => {
      id === 1
        ? (el.style.background = "yellow")
        : (el.style.background = "gray");
    }, 4000);
    setTimeout(() => {
      id === 2
        ? (el.style.background = "green")
        : (el.style.background = "gray");
    }, 5000);
    setTimeout(() => {
      el.style.background = "gray";
    }, 8000);
  });
});
