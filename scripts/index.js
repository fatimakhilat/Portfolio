import { initBackTop } from "./backTop.js";
import { initAnimations } from "./animations.js";
import { initMenu } from "./menu.js";
import { initNavigation } from "./navigation.js";
import { initTheme } from "./theme.js";




/*=========================================================
=                     DOM ELEMENTS                        =
=========================================================*/

const menuBtn = document.querySelector(".js-menu-btn");
const menu = document.querySelector(".js-right-item");

const themeBtn = document.querySelector(".js-moon-item");
const themeIcon = document.querySelector(".js-moon-item img");

const backTopBtn = document.querySelector(".js-back-top");

const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll("nav a");
const animatedElements = document.querySelectorAll(
  "section, footer, .skill-item, .project-card"
);




initMenu();

initAnimations();

initBackTop();

initNavigation();

initTheme();








