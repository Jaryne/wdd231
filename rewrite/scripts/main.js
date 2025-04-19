import { initializeVisitorCounter } from './visitorCounter.js';  // Import the function

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('data/artworks.json');
  const data = await response.json();
  const container = document.getElementById('featured-art');

  // display 3 random featured artworks
  const featured = data.artworks.sort(() => 0.5 - Math.random()).slice(0, 3);
  featured.forEach((art) => {
    const card = document.createElement('div');
    card.innerHTML = `
        <img src="${art.image}" alt="${art.title}" style="width:100%;">
        <h3>${art.title}</h3>
        <p>by ${art.artist}</p>
      `;
    container.appendChild(card);
  });
});

// highlight where you at rn/current page
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// handle scroll event and apply blur effect
window.addEventListener('scroll', function () {
  const body = document.body; // target the body element

  if (window.scrollY > 300) {
    body.classList.add('blur'); // 'blur' class when scrolled down
  } else {
    body.classList.remove('blur'); // remove 'blur' class when at the top
  }
});

document.getElementById("music-toggle").addEventListener("click", function () {
  let spotifyPlayer = document.getElementById("spotify-player");

  if (spotifyPlayer.style.display === "none") {
    spotifyPlayer.style.display = "block";
  } else {
    spotifyPlayer.style.display = "none";
  }
});

// initialize visitor counter
document.addEventListener("DOMContentLoaded", function () {
  initializeVisitorCounter("visitor-counter", "counter-display");
});

document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.getElementById("overlay");

  function toggleMenu() {
    if (navMenu.classList.contains("slide-out")) {
      navMenu.classList.remove("slide-out");
      navMenu.classList.add("slide-in");
      overlay.style.display = "block";
      setTimeout(() => {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      }, 10);
    } else {
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 500);
      navMenu.classList.remove("slide-in");
      navMenu.classList.add("slide-out");
    }
  }

  if (hamburger && overlay) {
    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
  }

  // Highlight current page
  const currentPage = window.location.pathname;
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }
  });
});