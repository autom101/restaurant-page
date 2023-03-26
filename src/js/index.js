//import css files
import "../css/reset.css";
import "../css/styles.css";

//import image files
import "../img/facebook.svg";
import "../img/instagram.svg";
import "../img/twitter.svg";
import "../img/restaurant-photo-pixabay.png";

import "../img/menu-item-images/chicken-wings.jpg";
import "../img/menu-item-images/poutine.jpg";
import "../img/menu-item-images/fajitas.jpg";
import "../img/menu-item-images/caesar-salad.jpg";
import "../img/menu-item-images/bbq-beans-and-rice.jpg";
import "../img/menu-item-images/ice-cream.jpg";

//import javascript files
import { menu } from "./menu";
import { ourStory } from "./about-us";
import { contactUs } from "./contact-us";
import { homePageHeader, homePageMain, homePageFooter } from "./home-page";

const body = document.querySelector("body");

const header = homePageHeader();
const main = homePageMain();
const footer = homePageFooter();

main.appendChild(menu());

body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
