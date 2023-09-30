// scripts.js

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    for (const link of navLinks) {
      link.addEventListener("click", smoothScroll);
    }
  });
  
  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
  
  // Toggle active class for navigation links based on scroll position
  window.addEventListener("scroll", highlightNavLinks);
  
  function highlightNavLinks() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const navLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
      const sectionTop = section.offsetTop - 50; // Adjust for header height
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  }
  