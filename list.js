const main = document.querySelector(".main");
const main2 = document.querySelector(".main2");
const main3 = document.querySelector(".main3");
const btn = document.querySelector(".add");
const list = document.querySelector(".list");
let count = 0;

btn.addEventListener("click", () => {
  count++;
  if (main.value.trim() === "") {
    return alert(404);
  } else {
    list.innerHTML += ` <tr class="line">
    <th scope="row">${count}</th>
    <td>
    <img src="${main.value}" alt="img" width="50"/>
    </td>
    <td>${main2.value}</td>
    <td>$${main3.value}</td>
    <td>
    <button class="del-btn btn btn-danger">Delete</button>
    <input type="checkbox" class = 'check'>
    </td>
  </tr>`;
    main.value = "";
    main2.value = "";
    main3.value = "";
  }
});
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    e.target.parentNode.parentNode.remove();
  }
});
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("check")) {
    e.target.classList.remove("check");
    if (e.target.parentNode.parentNode.classList.contains("line")) {
      e.target.parentNode.parentNode.classList.remove("line");
      console.log("hello");
    }
  } else {
    e.target.classList.add("check");
    e.target.parentNode.parentNode.classList.add("line");
  }
});
