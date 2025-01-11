import "./styles.css";
import "./reset.css";
import pageLoad from "./page-load"
import homePage from "./home-page";
import menuPage from "./menu-page";
import contactPage from "./contact-page";

pageLoad();

const homeBtn = document.getElementById('home-button');
const menuBtn = document.getElementById('menu-button');
const contactBtn = document.getElementById('contact-button');

homeBtn.addEventListener('click', homePage);
menuBtn.addEventListener('click', menuPage);
contactBtn.addEventListener('click', contactPage);