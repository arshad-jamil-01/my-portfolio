
// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});


//chat with me code 
const ChatBtn = ()=>{
  document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const chatBtn = document.getElementById("chatBtn");
  const hireMeBtn = document.getElementById("hireMeBtn");
  const closeBtn = modal.querySelector(".close");
  const form = document.getElementById("contactForm");

  chatBtn.onclick = () => modal.style.display = "flex";
  hireMeBtn.onclick = () => modal.style.display = "flex"; // NEW
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

  emailjs.init("Pqdtb2MJ6KtSleVuJ");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_rg0e4lw", "template_kbg68zr", this)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
        modal.style.display = "none";
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send message.");
      });
  });
});
}

ChatBtn();


//menu socail links icon for mobile views

const socialMenuBtn = ()=>{
  const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
}

