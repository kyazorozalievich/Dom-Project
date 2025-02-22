let name = document.querySelector(".inpName");
let age = document.querySelector(".inpAge");
let img = document.querySelector(".inpImg");
let save = document.querySelector(".save");
let modal = document.querySelector(".modalBg");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let block = document.querySelector(".block");

function createData() {
  let data = JSON.parse(localStorage.getItem("user")) || [];
  let newUser = {
    id: data.length + 1,
    name: name.value,
    age: age.value,
    img: img.value,
  };
  data.push(newUser);
  localStorage.setItem("user", JSON.stringify(data));
  getUser();
  name.value = "";
  age.value = "";
  img.value = "";
}

modal.style.display = "none";

save.addEventListener("click", () => {
  if (
    name.value.trim() === "" ||
    age.value.trim() === "" ||
    img.value.trim() === ""
  ) {
    alert("Заполните поля");
  } else {
    modal.style.display = "block";
  }
});

yes.addEventListener("click", () => {
  createData();
  modal.style.display = "none";
});
no.addEventListener("click", () => {
  modal.style.display = "none";
});

function getUser() {
  block.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("user")) || [];
  data.slice(-1).map((el, index) => {
    block.innerHTML += `
          <img src="${el.img}" alt="img">
          <div class="text">
            <h3>Имя:</h3>
            <h3>${el.name}</h3>
          </div>
          <div class="text">
            <h3>Возраст:</h3>
            <h3>${el.age}</h3>
          </div>
          <button class="delete" data-id="${index}">Удалить</button>
      `;
  });
  delLocal();
}

getUser();

function delLocal() {
  let buttons = document.querySelectorAll(".delete");
  let data = JSON.parse(localStorage.getItem("user")) || [];

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      data = data
        .slice()
        .reverse()
        .filter((el, id) => {
          return index !== id;
        });
      localStorage.setItem("user", JSON.stringify(data));
      getUser(); 
    });
  });
}
