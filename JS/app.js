/*------------  44-lesson ------------- */

// textContent

// const title = document.getElementById("title");
// const listItem = document.querySelectorAll(".list-item");

// const listItem1 = document.getElementById("list-item1");
// const listItem2 = document.getElementById("list-item2");
// const listItem3 = document.getElementById("list-item3");

// listItem.forEach((item) => {
//   item.textContent += " Darslari to'plami";
//   console.log(item.textContent);
// });

// console.log(title);

// title.textContent += " New Text";
// console.log(title.textContent);

// listItem1.textContent += " Darslari";

// listItem2.textContent += " Darslari";

// listItem3.textContent += " Darslari";

//  innerHTML

// const title = document.getElementById("title");
// title.innerHTML = `<i>New Text HTML</i>`;

const names = ["Diyorbek", "Doniyorbek", "Davlatbek"];

const ol = document.querySelector("ol");

names.forEach((name) => {
  ol.innerHTML += `<li>${name}</li>`;
});
