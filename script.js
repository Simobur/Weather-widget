const btnOpen = document.querySelector(".btn-open");
const btnSearch = document.querySelector(".btn-search-icon");
const searchWindow = document.querySelector(".search-window");
const container = document.querySelector(".container");
const input = document.querySelector(".input");

btnOpen.addEventListener("click", function () {
  searchWindow.classList.toggle("hidden");
  btnOpen.classList.toggle("hidden");
  setTimeout(function () {
    input.focus();
  }, 500);

  console.log(input);
});

btnSearch.addEventListener("click", function () {
  searchWindow.classList.toggle("hidden");
  btnOpen.classList.toggle("hidden");
});
