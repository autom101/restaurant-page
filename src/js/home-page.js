import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";

import retaurantPhoto from "../img/restaurant-photo-pixabay.png";

const homePageContent = () => {
  //
};

const homePageHeader = () => {
  //Creates nav with 3 items in it
  const createHomePageNav = () => {
    const nav = document.createElement("nav");

    const navLinksUl = document.createElement("ul");

    let menuNavLink = document.createElement("li");
    menuNavLink.textContent = "Menu";
    menuNavLink.classList.add("menu-nav-link");
    navLinksUl.appendChild(menuNavLink);

    let aboutUsNavLink = document.createElement("li");
    aboutUsNavLink.textContent = "Our Story";
    aboutUsNavLink.classList.add("about-us-nav-link");
    navLinksUl.appendChild(aboutUsNavLink);

    let contactUsNavLink = document.createElement("li");
    contactUsNavLink.textContent = "Get in Touch";
    contactUsNavLink.classList.add("contact-us-nav-link");
    navLinksUl.appendChild(contactUsNavLink);

    nav.appendChild(navLinksUl);
    return nav;
  };

  const createHeader = () => {
    const header = document.createElement("header");
    const heading = document.createElement("h1");
    heading.textContent = "Fakestaurant";
    header.appendChild(heading);
    return header;
  };
  // ...Contact Info... <- (height < 5%, sticky, black background with white text)

  const header = createHeader();
  header.appendChild(createHomePageNav());

  return header;
};

const homePageMain = () => {
  const main = document.createElement("main");
  return main;
};

const homePageFooter = () => {
  // const contactContainer = document.createElement("div");
  // const phoneNumber = document.createElement("div");
  // const address = document.createElement("div");
  const createIcons = () => {
    const instagramIcon = document.createElement("img");
    instagramIcon.src = instagram;
    footer.appendChild(instagramIcon);

    const facebookIcon = document.createElement("img");
    facebookIcon.src = facebook;
    footer.appendChild(facebookIcon);

    const twitterIcon = document.createElement("img");
    twitterIcon.src = twitter;
    footer.appendChild(twitterIcon);
  };

  const footer = document.createElement("footer");
  createIcons();
  return footer;
};

export { homePageHeader, homePageMain, homePageFooter };
