// js/main.js
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
  const body = document.body; // Target the body element

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

document.addEventListener("DOMContentLoaded", function () {
  let visitorCount = localStorage.getItem("visitorCount") || 0;
  visitorCount++;
  localStorage.setItem("visitorCount", visitorCount);

  const hoverElement = document.getElementById("visitor-counter");
  const counterDisplay = document.getElementById("counter-display");

  hoverElement.addEventListener("mouseenter", function () {
    counterDisplay.textContent = "Visitors: " + visitorCount;
    counterDisplay.style.display = "inline";
  });

  hoverElement.addEventListener("mouseleave", function () {
    counterDisplay.style.display = "none";
  });
});

// js/data.js
async function loadJSON(url) {
    const res = await fetch(url);
    return await res.json();
  }  