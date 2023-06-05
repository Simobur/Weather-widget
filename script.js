const btnOpen = document.querySelector(".btn-open");
const btnSearch = document.querySelector(".btn-search-icon");
const searchWindow = document.querySelector(".search-window");
const container = document.querySelector(".container");
const input = document.querySelector(".input");
const box = document.querySelector(".box");
const form = document.querySelector(".search-form");
const city = document.querySelector(".city");
const image = document.querySelector(".image");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const description = document.querySelector(".description");

let cityName;

////////////////
//Config ///////
////////////////
const API_KEY = "4c1c9db2c8b546bcb6b145935230506";
///////////////

const openWindow = function () {
  searchWindow.classList.remove("hidden");
  btnOpen.classList.add("hidden");
};

const closeWindow = function () {
  searchWindow.classList.add("hidden");
  btnOpen.classList.remove("hidden");
  input.value = "";
};

btnOpen.addEventListener("click", function () {
  openWindow();
  setTimeout(function () {
    input.focus();
  }, 200);
});

btnSearch.addEventListener("click", function () {
  closeWindow();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeWindow();
  }
});

const checkWeather = async function (cityName) {
  try {
    const curWeather =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4c1c9db2c8b546bcb6b145935230506&q=${cityName}&days=3&aqi=no&alerts=no
    `);
    const data = await curWeather.json();
    const dName = data.location.name;
    const dTemp = data.current.temp_c;
    const dWind = data.current.wind_kph;
    const dDescription = data.current.condition.text;
    const dIcon = data.current.condition.icon;
    city.textContent = dName;
    temp.textContent = new String(dTemp) + " °C";
    wind.textContent = new String(dWind) + " km/h";
    description.textContent = dDescription;
    image.src = dIcon;

    const weather = [dName, dTemp, dWind, dDescription, dIcon];

    return console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  cityName = input.value;
  if (!input.value) return;
  console.log(cityName);

  checkWeather(cityName);

  closeWindow();
});

checkWeather("New York");
