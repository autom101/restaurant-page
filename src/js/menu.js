// For creating the menu page items
import chickenWings from "../img/menu-item-images/chicken-wings.jpg";
import poutine from "../img/menu-item-images/poutine.jpg";
import fajitas from "../img/menu-item-images/fajitas.jpg";
import caesarSalad from "../img/menu-item-images/caesar-salad.jpg";
import bbqRice from "../img/menu-item-images/bbq-beans-and-rice.jpg";
import iceCream from "../img/menu-item-images/ice-cream.jpg";

const restaurantMenu = () => {
  const createMenuItem = (numberOfMenuItems) => {
    const menuItems = [[], [], [], [], [], []];
    for (let i = 0; i < numberOfMenuItems; i++) {
      menuItems[i] = document.createElement("section");
      menuItems[i][0] = document.createElement("h2");
      menuItems[i][1] = document.createElement("p");
      menuItems[i][2] = document.createElement("img");

      menuItems[i].appendChild(menuItems[i][2]);
      menuItems[i].appendChild(menuItems[i][0]);
      menuItems[i].appendChild(menuItems[i][1]);

      menuItems[i].classList.add("menuItems");
    }

    menuItems[0][2].src = chickenWings;
    menuItems[0][2].title = "Photo by Chad Montano on Unsplash";
    menuItems[0][0].textContent = "Chicken Wings";
    menuItems[0][1].textContent =
      "Choose from our classic fried wings flavored with garlic, hot buffalo, honey barbecue, or opt for our boneless wings. Our sides are absolutely delicious, so don't forget to add some fries, onion rings, mozzarella sticks, mac & cheese, and slaw! Enjoy!";

    menuItems[1][2].src = poutine;
    menuItems[1][2].title = "Photo by Taine Noble on Unsplash";
    menuItems[1][0].textContent = "Poutine";
    menuItems[1][1].textContent =
      "Our menu offers a variety of delicious poutine dishes to enjoy. Start by choosing your favorite type of cheese curds - we have both classic cheddar and gouda. Then, top your poutine with a flavor of your choice – options include savory bacon, BBQ pulled pork, and vegan chili. Finally, decide on one of our custom sauces such as herb garlic aioli, honey mustard, and smoked mayo.";

    menuItems[2][2].src = fajitas;
    menuItems[2][2].title = "Photo by micheile henderson on Unsplash";
    menuItems[2][0].textContent = "Fajitas";
    menuItems[2][1].textContent =
      "Our menu includes tasty, authentic Mexican cuisine. Try our signature fajitas, made with marinated beef, chicken or shrimp, served with grilled peppers and onions, fresh guacamole and warm flour tortillas. We also offer burritos, tacos, nachos and enchiladas. All dishes are prepared using fresh ingredients and traditional Mexican flavors for an amazing culinary experience. Enjoy a delicious margarita with your meal to really get the full flavor of Mexico!";

    menuItems[3][2].src = caesarSalad;
    menuItems[3][2].title = "Photo by Ryan Concepcion on Unsplash";
    menuItems[3][0].textContent = "Caesar Salad";
    menuItems[3][1].textContent =
      "Enjoy our classic Caesar Salad! Our salad is made with freshly torn romaine lettuce, shaved Parmesan cheese, and homemade croutons, all lightly and deliciously dressed in our signature Caesar dressing. Enjoy the perfect side dish to any meal - or enjoy it on its own!";

    menuItems[4][2].src = bbqRice;
    menuItems[4][2].title = "Photo by Taine Noble on Unsplash";
    menuItems[4][0].textContent = "BBQ Beans & Rice";
    menuItems[4][1].textContent =
      "BBQ beans and rice is a classic Southern-style dish packed with flavor. Our version is made with beans slow-cooked in a rich smoky BBQ sauce and served over fluffy white rice. It's perfect as a side dish or as a main course. Comfort food that's sure to bring a smile to your face!";

    menuItems[5][2].src = iceCream;
    menuItems[5][2].title = "Photo by Lama Roscu on Unsplash";
    menuItems[5][0].textContent = "In-house Ice-cream";
    menuItems[5][1].textContent =
      "Our in-house ice-cream is made with fresh and natural ingredients for a sweet and creamy experience. Our flavours range from the classic chocolate and vanilla to unique twists such as orange mango and cinnamon ginger. Every scoop is carefully crafted to provide a memorable and delicious taste. Enjoy this indulgent treat as a refreshing treat or as a special addition to any dessert.";

    for (let i = 0; i < numberOfMenuItems; i++) {
      menu.appendChild(menuItems[i]);
    }
  };

  const menu = document.createElement("div");
  menu.classList.add("menu");
  createMenuItem(6);
  return menu;
};

export { restaurantMenu };
