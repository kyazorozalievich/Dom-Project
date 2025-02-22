let inpName = document.querySelector(".inputName");
let inpNumber = document.querySelector(".inputNumber");
let save = document.querySelector(".save");
let loading = document.querySelector(".loader");
let cards = document.querySelector(".check-all");
let delAll = document.querySelector(".deleteBtn");

loading.style.display = "none";
function createCard() {
  if (inpName.value.trim() === "" || inpNumber.value.trim() === "") {
    alert("error");
  } else if (
    inpNumber.value
      .split("")
      .filter((el) => !isNaN(el))
      .join("") !== inpNumber.value
  ) {
    alert("Введите 16 цифр");
  } else {
    loading.style.display = "block";
    setTimeout(() => {
      let data = JSON.parse(localStorage.getItem("card")) || [];
      let newCard = {
        id: data.length + 1,
        name: inpName.value,
        number: inpNumber.value,
        date: new Date().toLocaleDateString(),
      };
      data.push(newCard);
      localStorage.setItem("card", JSON.stringify(data));
      inpName.value = "";
      inpNumber.value = "";
      getCard();
      loading.style.display = "none";
    }, 1000);
  }
}

save.addEventListener("click", () => {
  createCard();
});

getCard();

function getCard() {
  cards.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("card"));
  data.map((el) => {
    cards.innerHTML += `
    <div class="card">
    <a class='delete'>x</a>
    ${
      el.number[0] === "1"
        ? ' <img src="./img/card/masterLogo.webp" alt="" />'
        : el.number[0] === "2"
        ? ' <img src="./img/card/visaLogo.png" alt="" />'
        : el.number[0] === "3"
        ? " <img src='./img/card/optimaLogo.png' alt='' />"
        : el.number[0] === "4"
        ? " <img src='./img/card/mbankLogo.png' alt='' />"
        : el.number[0] === "5"
        ? " <img src='./img/card/aziaLogo.png' alt='' />"
        : el.number[0] === "6"
        ? " <img src='./img/card/ailLogo.png' alt='' />"
        : el.number[0] === "7"
        ? " <img src='./img/card/kaspiLogo.png' alt='' />"
        : el.number[0] === "8"
        ? " <img src='./img/card/bakaiLogo.png' alt='' />"
        : el.number[0] === "9"
        ? " <img src='./img/card/rskLogo.png' alt='' />"
        : " <img src='./img/card/baiLogo.png' alt='' />"
    }
           
           
    <h3>${
      el.number.slice(0, 4) +
      " - " +
      el.number.slice(4, 8) +
      " - " +
      el.number.slice(8, 12) +
      " - " +
      el.number.slice(12, 16)
    }</h3>
    <div class="content">
    <div class="text">
    <h4>Name</h4>
    <h4>${el.name.toUpperCase()}</h4>
    </div>
    <div class="text">
    <h4>Date</h4>
    <h4>${el.date.replaceAll(".", "/")}</h4>
    </div>
    </div>
    </div>
    `;
    delCard();
  });
}

function delCard() {
  let data = JSON.parse(localStorage.getItem("card")) || [];
  let delButtons = document.querySelectorAll(".delete");
  delButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      data = data.filter((el, idx) => {
        return index !== idx;
      });
      localStorage.setItem("card", JSON.stringify(data));
      getCard();
    });
  });
}

delAll.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("card")) || [];
  data = data.filter((el, idx) => {
    return idx !== idx;
  });
  localStorage.setItem("card", JSON.stringify(data));
  getCard();
});
