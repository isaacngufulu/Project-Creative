console.log("fuck");
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnMobileEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnMobileEl.addEventListener("click", function () {
  headerEl.classList.toggle("open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (i) {
    i.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("open");
  });
});

window.addEventListener("scroll", function () {
  var body = document.querySelector("body");
  if (window.scrollY >= 30) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
});
