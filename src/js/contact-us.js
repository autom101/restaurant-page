//For the contact us tab of the restaurant
const contactUs = () => {
  //Create filler text for contact us
  const createContactText = () => {
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
      "Come by our restaurant and experience our culinary delights for yourself!";
    return contactUsInfo;
  };
  //Create address for contact us
  const createAddress = () => {
    const contactAddressArray = [[], [], [], []];

    for (let i = 0; i < contactAddressArray.length; i++) {
      contactAddressArray[i] = document.createElement("span");
    }

    contactAddressArray[0].textContent = "Fakestaurant";
    contactAddressArray[0].classList.add("logo-about");
    contactAddressArray[1].textContent = "123 Fake ST";
    contactAddressArray[2].textContent = "Edmonton, AB";
    contactAddressArray[3].textContent = "Canada, A1A 9Z9";

    return contactAddressArray;
  };

  const createContacts = () => {
    const contactDiv = document.createElement("div");
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Stay in Touch!";
    contactHeading.style.textAlign = "center";

    const contactUsInfo = createContactText();
    const contactAddress = createAddress();

    contactDiv.appendChild(contactHeading);
    for (let i = 0; i < contactUsInfo.length; i++) {
      contactDiv.appendChild(contactUsInfo[i]);
    }
    for (let i = 0; i < contactAddress.length; i++) {
      contactDiv.appendChild(contactAddress[i]);
    }
    return contactDiv;
  };

  const contacts = document.createElement("section");
  contacts.classList.add("contact-us");
  contacts.appendChild(createContacts());
  return contacts;
};

export { contactUs };
