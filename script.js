let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("01CBgWYFzjDtqlrdQ");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_mcz21kr", "template_upy0z4l", this).then(
        function () {
          alert("Message envoyé avec succès!");
        },
        function (error) {
          alert("Erreur lors de l'envoi du message: " + JSON.stringify(error));
        }
      );
    });
});
