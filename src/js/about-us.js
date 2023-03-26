import aboutImage from "../img/about-us-picture.jpg";

//For creating the abous-us section of the restaurant
const ourStory = () => {
  const createAbout = () => {
    const aboutUsDiv = document.createElement("div");
    const aboutHeading = document.createElement("h2");
    const aboutPicture = document.createElement("img");
    aboutPicture.src = aboutImage;
    aboutPicture.title = "Photo by Mile Modic on Unsplash";

    aboutHeading.textContent = "Our Story";
    aboutHeading.style.textAlign = "center";

    const aboutUsInfo = [[], [], [], []];
    for (let i = 0; i < aboutUsInfo.length; i++) {
      aboutUsInfo[i] = document.createElement("p");
    }
    aboutUsInfo[0].textContent =
      "Lorem ipsum dolor sit amet. Eos culpa maxime ea beatae voluptatum vel recusandae aliquid. Ea iure quibusdam aut autem dolores et tenetur modi et galisum quisquam aut commodi aspernatur et dolorem similique? Est iste totam et rerum tenetur qui nisi adipisci et reprehenderit quas.";
    aboutUsInfo[1].textContent =
      "Et optio illum quo sint galisum ea error quis et labore repellendus. Nam voluptatem galisum aut reiciendis cupiditate ex sequi repellat aut aperiam reiciendis. Qui omnis repellendus ut corporis eveniet non galisum similique ea consequatur iure et possimus delectus a officia cupiditate.";
    aboutUsInfo[2].textContent =
      "At nihil quas hic officia laboriosam vel quaerat saepe. Eos consectetur culpa hic maiores saepe nam dolorem assumenda ea voluptatem internos eos deserunt fugiat. Sit provident quod nam sunt repudiandae a officia assumenda aut ipsa galisum non ipsa corporis ex tenetur culpa cum molestiae enim. Est officia architecto sit culpa voluptas aut quaerat odio sed enim numquam ex voluptatem labore est iusto fugiat in galisum laudantium!";
    aboutUsInfo[3].textContent =
      "Ut commodi necessitatibus quo blanditiis voluptas id iste voluptas ex maiores nulla est vitae quisquam et laboriosam sint! Rem odio omnis aut ipsum voluptas et laudantium labore ut rerum voluptas At consequatur animi. In officiis minus ea culpa voluptatem est voluptate nihil non consequatur excepturi ab facilis quia et amet asperiores. Ex ullam dolorem vel omnis quasi sed tempore doloribus sit ipsa illum.";

    aboutUsDiv.appendChild(aboutHeading);
    aboutUsDiv.appendChild(aboutPicture);
    for (let i = 0; i < aboutUsInfo.length; i++) {
      aboutUsDiv.appendChild(aboutUsInfo[i]);
    }
    return aboutUsDiv;
  };
  const about = document.createElement("section");
  about.classList.add("about-us");
  about.appendChild(createAbout());
  return about;
};

export { ourStory };
