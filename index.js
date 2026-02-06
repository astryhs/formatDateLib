import {
  formatDateToRU,
  formatDateToUS,
} from "https://cdn.jsdelivr.net/gh/astryhs/FormatDateLib@main/lib/formatDate/formatDate.js";

//https://cdn.jsdelivr.net/gh/astryhs/FormatDateLib@main/lib/formatDate/formatDate.js

//https://github.com/astryhs/FormatDateLib/blob/main/lib/formatDate/formatDate.js

let country = "ru";

const formatDateForCountry = (date, country) => {
  switch (country) {
    case "us":
      return formatDateToUS(date);
    case "ru":
      return formatDateToRU(date);
    default:
      return formatDateToRU(date);
  }
};
const currentDate = new Date();
const now = formatDateForCountry(currentDate, country);

const weekLater = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 7);
const then = formatDateForCountry(weekLater, country);

document.getElementById("now").innerHTML = now;
document.getElementById("then").innerHTML = then;
