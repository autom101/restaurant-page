//For the contact us tab of the restaurant
const contactUs = () => {
  const createContacts = () => {
    const contactDiv = document.createElement("div");
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Stay in Touch!";
    contactHeading.style.textAlign = "center";

    const contactUsInfo = [[], [], [], [], []];
    for (let i = 0; i < contactUsInfo.length; i++) {
      contactUsInfo[i] = document.createElement("p");
    }
    contactUsInfo[0].textContent =
      "Our staff are ready to help with all of your needs to the best of their abilities!";
    contactUsInfo[1].textContent =
      "We would love to hear from you! If you have any questions, comments or suggestions regarding our restaurant, please get in touch with us through: ";
    contactUsInfo[2].textContent = "Phone: (123) 456-7890";
    contactUsInfo[3].textContent = "Email: info@fakestaurant.com";
    contactUsInfo[4].textContent =
      "Come by our restaurant and experience our culinary delights for yourself! Our address is: 123 Main Street Anytown, ST, Edmonton AB. We look forward to seeing you!";

    contactDiv.appendChild(contactHeading);
    for (let i = 0; i < contactUsInfo.length; i++) {
      contactDiv.appendChild(contactUsInfo[i]);
    }
    return contactDiv;
  };
  const contacts = document.createElement("section");
  contacts.classList.add("contact-us");
  contacts.appendChild(createContacts());
  return contacts;
};

export { contactUs };
