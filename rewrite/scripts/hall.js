document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("data/artworks.json");
  const data = await res.json();
  const results = document.getElementById("results");
  const searchInput = document.getElementById("search");

  function render(query = "") {
    results.innerHTML = "";

    data.artworks
      .filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.artist.toLowerCase().includes(query.toLowerCase())
      )
      .forEach((art) => {
        const card = document.createElement("div");
        card.classList.add("art-card");
        card.style.backgroundImage = `url(${art.image})`;

        card.innerHTML = `
          <div class="art-card-blur-overlay"></div>
          <div class="art-card-content">
            <img 
              src="${art.image}" 
              alt="${art.title}" 
              class="art-image lazy-fade" 
              loading="lazy"
            >
            <h3>${art.title}</h3>
            <p><strong>${art.artist}</strong></p>
            <p>${art.description}</p>
          </div>
        `;

        results.appendChild(card);
      });
  }

  render();

  searchInput.addEventListener("input", () => {
    render(searchInput.value);
  });
});