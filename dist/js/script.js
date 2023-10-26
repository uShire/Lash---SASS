const toggleMenuO = document.querySelector(".toggle__menu#open");
const toggleMenuC = document.querySelector(".toggle__menu#close");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav__content");
const body = document.querySelector(".body");

toggleMenuO.addEventListener("click", () => {
  toggleMenuO.classList.add("open");
  headerNav.classList.add("open");
  headerNav.style = "position:fixed;";
  body.style = "overflow:hidden;";
  headerNav.style = "overflow-y:scroll;";
  headerNav.style = "z-index:999;";
});

toggleMenuC.addEventListener("click", () => {
  toggleMenuO.classList.remove("open");
  headerNav.classList.remove("open");
  body.style = "overflow-y:scroll;";
  header.style = "position:fixed; width:100%;";
  headerNav.style = "z-index:999;";
});

const links = document.querySelectorAll(".footer__item h4");

links.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});
