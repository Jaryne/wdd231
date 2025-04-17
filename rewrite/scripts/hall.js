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
          card.style.border = "1px solid #ccc";
          card.style.borderRadius = "8px";
          card.style.background = "#fff";
          card.style.padding = "1rem";
          card.innerHTML = `
            <img src="${art.image}" alt="${art.title}" style="width: 100%; border-radius: 6px;">
            <h3 style="margin-top: 1rem;">${art.title}</h3>
            <p><strong>${art.artist}</strong></p>
            <p>${art.description}</p>
          `;
          results.appendChild(card);
        });
    }

    render();

    searchInput.addEventListener("input", () => {
      render(searchInput.value);
    });
  });