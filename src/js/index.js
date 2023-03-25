//import css files
import "../css/reset.css";
import "../css/styles.css";

//import image files
import "../img/facebook.svg";
import "../img/instagram.svg";
import "../img/twitter.svg";

//import javascript files
import { menu } from "./menu";
import { ourStory } from "./about-us";
import { contactUs } from "./contact-us";
import { homePageHeader, homePageMain, homePageFooter } from "./home-page";

const body = document.querySelector("body");

body.appendChild(homePageHeader());
body.appendChild(homePageMain());
body.appendChild(homePageFooter());
