let artworks = [];
let currentIndex = 0;
let autoSlide;

async function loadArtworks() {
  try {
    const res = await fetch('data/artworks.json');
    artworks = await res.json();
    displayArtwork(currentIndex);
    startAutoSlide();
  } catch (error) {
    console.error('Failed to load artworks:', error);
  }
}

function displayArtwork(index) {
  const art = artworks[index];
  console.log("Displaying:", art.image);

  const img = document.getElementById('art-img');
  const title = document.getElementById('art-title');
  const year = document.getElementById('art-year');
  const desc = document.getElementById('art-description');

  // Reset fade-in
  img.classList.remove('show');
  title.classList.remove('show');
  year.classList.remove('show');
  desc.classList.remove('show');

  // Update content
  img.src = art.image;
  img.alt = art.title;
  title.textContent = art.title;
  year.textContent = `${art.artist} — ${art.medium}`;
  desc.textContent = `A masterpiece by ${art.artist}.`;

  // Trigger reflow and fade-in
  void img.offsetWidth;
  img.classList.add('show');
  title.classList.add('show');
  year.classList.add('show');
  desc.classList.add('show');
}

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
  displayArtwork(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % artworks.length;
  displayArtwork(currentIndex);
});

// Auto-slide functions
function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % artworks.length;
    displayArtwork(currentIndex);
  }, 3000); // ⏱ Adjust delay as needed
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Pause auto-slide on hover
const galleryEl = document.querySelector('.gallery');
if (galleryEl) {
  galleryEl.addEventListener('mouseenter', stopAutoSlide);
  galleryEl.addEventListener('mouseleave', startAutoSlide);
}

window.addEventListener('DOMContentLoaded', loadArtworks);
