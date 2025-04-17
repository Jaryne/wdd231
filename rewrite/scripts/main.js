// js/main.js
import { trackVisitorCount } from './visitorCounter.js';

document.addEventListener("DOMContentLoaded", async () => {
  trackVisitorCount();

  const response = await fetch('data/artworks.json');
  const data = await response.json();
  const container = document.getElementById('featured-art');

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

  // Highlight current nav
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Music toggle
  document.getElementById("music-toggle").addEventListener("click", function () {
    let spotifyPlayer = document.getElementById("spotify-player");
    spotifyPlayer.style.display = spotifyPlayer.style.display === "none" ? "block" : "none";
  });
});

window.addEventListener('scroll', function () {
  const body = document.body;
  body.classList.toggle('blur', window.scrollY > 300);
});