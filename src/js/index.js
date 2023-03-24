import "../css/reset.css";
import "../css/styles.css";

import { menu } from "./menu";
import { ourStory } from "./about-us";
import { contactUs } from "./contact-us";
import { homePageHeader } from "./home-page";

const body = document.querySelector("body");

body.appendChild(homePageHeader());
