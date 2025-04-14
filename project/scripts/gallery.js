let artworks = [];
let currentIndex = 0;

async function loadArtworks() {
  const res = await fetch('artworks.json');
  artworks = await res.json();
  displayArtwork(currentIndex);
}

function displayArtwork(index) {
  const art = artworks[index];
  document.getElementById('art-img').src = art.image;
  document.getElementById('art-img').alt = art.title;
  document.getElementById('art-title').textContent = art.title;
  document.getElementById('art-year').textContent = art.year;
  document.getElementById('art-description').textContent = art.description;
}

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
  displayArtwork(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % artworks.length;
  displayArtwork(currentIndex);
});

window.addEventListener('DOMContentLoaded', loadArtworks);