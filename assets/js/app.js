const navMenu = document.querySelector("#nav-menu");
const navClose = document.querySelector("#nav-close");
const navToggle = document.querySelector("#nav-toggle");
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector("#header");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("#nav");
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    header.classList.add("add-blur");
  } else {
    header.classList.remove("add-blur");
  }
});

const ContactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // servicesID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_cw8galv",
      "template_uljzr19",
      "#contact-form",
      "BwjVVc3C4MTVcxBpM"
    )
    .then(
      () => {
        contactMessage.textContent = "Message Sent Successfully😉";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        ContactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not Sent😒";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      }
    );
};

ContactForm.addEventListener("submit", sendEmail);

const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    scrollUp.classList.add("show-scroll-up");
  } else {
    scrollUp.classList.remove("show-scroll-up");
  }
});
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const btn = e.currentTarget.getAttribute("href");
    const navHeight = header.getBoundingClientRect().height;
    const element = document.querySelector(btn);
    console.log(btn);
    console.log(element);
    let elementHeight = element.offsetTop;
    elementHeight = elementHeight - navHeight;
    window.scrollTo(0, elementHeight);
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home-data, .home-social, .contact-container, .footer-container");
sr.reveal(".home-image", { origin: "bottom" });
sr.reveal(".about-data, .skills-data", { origin: "left" });
sr.reveal(".about-image, .skills-content", { origin: "right" });
sr.reveal(".services-card, .projects-card", { interval: 100 });
