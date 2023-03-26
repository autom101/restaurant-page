//For the contact us tab of the restaurant
const contactUs = () => {
  const createContacts = () => {
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact Us";
    contactHeading.style.textAlign = "center";
  };
  const contacts = document.createElement("section");
  contacts.classList.add("contact-us");
  return contacts;
};

export { contactUs };
