const homePageContent = () => {
  //
};

const homePageHeader = () => {
  //Creates nav with 3 items in it
  const createHomePageNav = () => {
    const nav = document.createElement("nav");

    const navLinksUl = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
      let navLink = document.createElement("li");
      navLink.textContent = `Link ${i + 1}`;

      navLinksUl.appendChild(navLink);
    }

    nav.appendChild(navLinksUl);
    return nav;
  };

  // ...Contact Info... <- (height < 5%, sticky, black background with white text)

  const header = document.createElement("header");

  const heading = document.createElement("h1");
  heading.textContent = "Fakestaurant";

  header.appendChild(heading);
  header.appendChild(createHomePageNav());

  return header;
};

const homePageMain = () => {
  //
};

const homePageFooter = () => {
  //Should contain phone number and address?
  const footerContacts = () => {
    const contactContainer = document.createElement("div");
    const phoneNumber = document.createElement("div");
    const address = document.createElement("div");
  };

  const footer = document.createElement("footer");

  footer.textContent = "";
};

export { homePageHeader };
