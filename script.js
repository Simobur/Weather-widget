const btnOpen = document.querySelector(".btn-open");
const btnSearch = document.querySelector(".btn-search-icon");
const searchWindow = document.querySelector(".search-window");
const container = document.querySelector(".container");
const input = document.querySelector(".input");
const box = document.querySelector(".box");

btnOpen.addEventListener("click", function () {
  searchWindow.classList.toggle("hidden");
  btnOpen.classList.toggle("hidden");
  setTimeout(function () {
    input.focus();
  }, 200);
});

btnSearch.addEventListener("click", function () {
  searchWindow.classList.toggle("hidden");
  btnOpen.classList.toggle("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape") {
    searchWindow.classList.add("hidden");
    btnOpen.classList.remove("hidden");
    input.value = "";
  }
});

let cityName;

window.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
});
