//aos
$(document).ready(function() {
  $("section").each(function() {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function(index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true
  });
});
// app gallery
var phoneImgs = new Swiper(".phoneImgs", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 60,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 10,
    depth: 200,
    modifier: 1.2,
    slideShadows: true
  },
  navigation: {
    nextEl: ".appSliderNext",
    prevEl: ".appSliderPrev"
  }
});
// form highlight
function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}
// menu
let toggler = document.querySelector(".menu-btn");
let menue = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  toggler.querySelector(".menu-bar").classList.toggle("menu-transform");
  menue.classList.toggle("show");
});
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    toggler.querySelector(".menu-bar").classList.remove("menu-transform");
    menue.classList.remove("show");
  });
});
// highlight nav links
let navLinks = document.querySelectorAll(".nav-links a");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});