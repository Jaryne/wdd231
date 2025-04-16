// js/main.js
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('data/artworks.json');
  const data = await response.json();
  const container = document.getElementById('featured-art');

  // Display 3 random featured artworks
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
  const body = document.body; // Target the body element

  // Check if the scroll position is more than 100px
  if (window.scrollY > 300) {
    body.classList.add('blur'); // Add the 'blur' class when scrolled down
  } else {
    body.classList.remove('blur'); // Remove the 'blur' class when at the top
  }
});

