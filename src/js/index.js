//import css files
import "../css/reset.css";
import "../css/styles.css";

//import image files
import "../img/facebook.svg";
import "../img/instagram.svg";
import "../img/twitter.svg";
import "../img/restaurant-photo-pixabay.png";
import "../img/texture.jpg";

import "../img/menu-item-images/chicken-wings.jpg";
import "../img/menu-item-images/poutine.jpg";
import "../img/menu-item-images/fajitas.jpg";
import "../img/menu-item-images/caesar-salad.jpg";
import "../img/menu-item-images/bbq-beans-and-rice.jpg";
import "../img/menu-item-images/ice-cream.jpg";

//import javascript files
import { restaurantMenu } from "./menu";
import { ourStory } from "./about-us";
import { contactUs } from "./contact-us";
import { homePageHeader, homePageMain, homePageFooter } from "./home-page";

//create global variables for use later on
const body = document.querySelector("body");
const header = homePageHeader();
const main = homePageMain();
const footer = homePageFooter();

const menu = restaurantMenu();
const contacts = contactUs();
const aboutUs = ourStory();

const load = () => {
  const removeChildren = () => {
    if (main.contains(menu)) {
      main.removeChild(menu);
    }
    if (main.contains(contacts)) {
      main.removeChild(contacts);
    }
    if (main.contains(aboutUs)) {
      main.removeChild(aboutUs);
    }
    return;
  };

  const loadMenu = () => {
    const menuNavLink = document.querySelector(".menu-nav-link");
    menuNavLink.addEventListener("click", (e) => {
      e.stopPropagation();
      removeChildren();
      main.appendChild(menu);
    });
  };

  const loadContacts = () => {
    const contactUsNavLink = document.querySelector(".contact-us-nav-link");
    contactUsNavLink.addEventListener("click", (e) => {
      e.stopPropagation();
      removeChildren();
      main.appendChild(contacts);
    });
  };

  const loadAbout = () => {
    const aboutUsNavLink = document.querySelector(".about-us-nav-link");
    aboutUsNavLink.addEventListener("click", (e) => {
      e.stopPropagation();
      removeChildren();
      main.appendChild(aboutUs);
    });
  };

  return { loadMenu, loadContacts, loadAbout };
};

onload = () => {
  main.appendChild(menu);

  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
  load.loadMenu();
  load.loadContacts();
  load.loadAbout();
};
