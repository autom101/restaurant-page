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

const homePageContent = () => {
  //
};

const homePageHeader = () => {
  // ...Contact Info... <- (height < 5%, sticky, black background with white text)
  const header = document.createElement("header");

  const heading = document.createElement("h1");
  heading.textContent = "Hello, World";

  header.appendChild(heading);
  header.appendChild(createHomePageNav());

  return header;
};

export { homePageHeader };
