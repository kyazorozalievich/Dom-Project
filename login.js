const form = document.querySelector(".form");
const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const btn = document.querySelector(".add");
const infomsg = document.querySelector("h4");

let count = 4;
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  if (email.value === "motionweb@gmail.com" && pass.value === "12345") {
    infomsg.style.color = "green";
    infomsg.innerHTML = "Доступ окрыт!";
    email.style.border = "";
    pass.style.border = "";
  } else if (email.value.trim() === "" && pass.value.trim() === "") {
    email.style.border = "2px solid red";
    pass.style.border = "2px solid red";
    infomsg.style.color = "red";
    infomsg.innerHTML = "Заполните поле!";
    email.value = "";
    pass.value = "";
  } else {
    count--;
    email.value = "";
    pass.value = "";
    if (count === 3) {
      infomsg.style.color = "rgb(34, 152, 7)";
      infomsg.innerHTML = "y вас осталось 3 попытки";
    } else if (count === 2) {
      infomsg.style.color = "rgb(243, 251, 7)";
      infomsg.innerHTML = "y вас осталось 2 попытки";
    } else if (count === 1) {
      infomsg.style.color = "rgb(183, 40, 8)";
      infomsg.innerHTML = "y вас осталось 1 попытok";
    } else {
      infomsg.style.color = "red";
      infomsg.innerHTML = "Доступ закрыт!";
      btn.setAttribute("disabled", "disabled");
    }
  }
});
