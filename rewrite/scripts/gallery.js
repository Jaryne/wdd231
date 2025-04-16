// scripts/gallery.js
let currentIndex = 0;
let artworks = [];

async function loadGallery() {
  const res = await fetch('data/artworks.json');
  const data = await res.json();
  artworks = data.artworks;
  displayArt(currentIndex);
}

function displayArt(index) {
  const art = artworks[index];
  document.getElementById('art-img').src = art.image;
  document.getElementById('art-img').alt = art.title;
  document.getElementById('art-title').textContent = art.title;
  document.getElementById('art-year').textContent = art.year;
  document.getElementById('art-description').textContent = art.description;
}

document.addEventListener('DOMContentLoaded', () => {
  loadGallery();

  document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    displayArt(currentIndex);
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % artworks.length;
    displayArt(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("data/artworks.json");
  const data = await res.json();
  const artists = [...new Set(data.artworks.map((a) => a.artist))];
  const container = document.getElementById("artist-list");

  artists.forEach((artist) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ddd";
    card.style.padding = "1rem";
    card.style.background = "#fff";
    card.style.borderRadius = "8px";
    card.innerHTML = `<h2 style="font-family: 'Cormorant Garamond'; font-size: 1.5rem;">${artist}</h2>`;
    container.appendChild(card);
  });
});