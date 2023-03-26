//For creating the abous-us section of the restaurant
const ourStory = () => {
  const createContacts = () => {
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact Us";
    contactHeading.style.textAlign = "center";
  };
  const contacts = document.createElement("section");
  contacts.classList.add("about-us");
  return contacts;
};

export { ourStory };
