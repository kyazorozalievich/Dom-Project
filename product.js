let create = document.querySelector(".create");
let product = document.querySelector(".product");
let inpTitle = document.querySelector(".inpTitle");
let inpPrice = document.querySelector(".inpPrice");
let inpImg = document.querySelector(".inpImage");
let save = document.querySelector(".save");
let productPage = document.querySelector(".productPage");
let createPage = document.querySelector(".createPage");
let productBlock = document.querySelector(".getProduct");

productPage.style.display = "none";
create.style.borderBottom = "2px solid white";

create.addEventListener("click", () => {
  productPage.style.display = "none";
  createPage.style.display = "block";
  create.style.borderBottom = "2px solid white";
  product.style.borderBottom = "none";
});

product.addEventListener("click", () => {
  productPage.style.display = "block";
  createPage.style.display = "none";
  product.style.borderBottom = "2px solid white";
  create.style.borderBottom = "none";
});

function createProduct() {
  if (
    inpTitle.value.trim() === "" ||
    inpPrice.value.trim() === "" ||
    inpImg.value.trim() === ""
  ) {
    alert("Заполните пустые поля");
  } else {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let newProduct = {
      id: data.length + 1,
      title: inpTitle.value,
      price: inpPrice.value,
      img: inpImg.value,
      rate: Math.round(Math.random() * 5),
      date: new Date().toLocaleDateString(),
    };
    data.push(newProduct);
    localStorage.setItem("product", JSON.stringify(data));
    inpTitle.value = "";
    inpPrice.value = "";
    inpImg.value = "";
    getProduct();
  }
}

save.addEventListener("click", () => {
  createProduct();
});

function getProduct() {
  productBlock.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("product")) || [];
  data.map((el) => {
    productBlock.innerHTML += `
    <div class="card">
                <img src="${el.img}" alt="" />
                <h2>${el.title}</h2>
                <div class="text">
                <h3>$${
                  el.price > 100 ? Math.round(el.price * 0.8) : el.price
                }</h3>
                ${
                  el.price > 100
                    ? `<h3 style="color: red"><strike>$${el.price}</strike></h3>`
                    : ""
                }
              
                <h3>⭐️${Math.round(el.rate)}</h3>
                </div>
                <h6>${el.date}</h6>
                <button class="delete">Delete</button>
              </div>
    `;
    delProduct();
  });
}

getProduct();

function delProduct() {
  let buttons = document.querySelectorAll(".delete");
  let data = JSON.parse(localStorage.getItem("product")) || [];
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      data = data.filter((el, idx) => {
        return index !== idx;
      });
      localStorage.setItem("product", JSON.stringify(data));
      getProduct();
    });
  });
}
