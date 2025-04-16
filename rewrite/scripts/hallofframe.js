document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("data/artworks.json");
    const data = await res.json();
    const featured = data.artworks.filter(a => a.featured === true);

    const container = document.getElementById("hall-gallery");
    const artistFilter = document.getElementById("artistFilter");
    const yearFilter = document.getElementById("yearFilter");

    const uniqueArtists = [...new Set(featured.map(a => a.artist))];
    const uniqueYears = [...new Set(featured.map(a => a.year))];

    uniqueArtists.forEach(artist => {
      const opt = document.createElement("option");
      opt.value = artist;
      opt.textContent = artist;
      artistFilter.appendChild(opt);
    });

    uniqueYears.forEach(year => {
      const opt = document.createElement("option");
      opt.value = year;
      opt.textContent = year;
      yearFilter.appendChild(opt);
    });

    function renderGallery() {
      const artist = artistFilter.value;
      const year = yearFilter.value;

      container.innerHTML = "";
      featured
        .filter(a => (artist === "" || a.artist === artist) && (year === "" || a.year === year))
        .forEach(a => {
          const card = document.createElement("div");
          card.innerHTML = `
            <img src="${a.image}" alt="${a.title}" style="width: 100%; border-radius: 8px;">
            <h3 style="margin-top: 0.5rem;">${a.title} (${a.year})</h3>
            <p><strong>${a.artist}</strong></p>
            <p>${a.description}</p>
          `;
          container.appendChild(card);
        });
    }

    artistFilter.addEventListener("change", renderGallery);
    yearFilter.addEventListener("change", renderGallery);

    renderGallery();
  });