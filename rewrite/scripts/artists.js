document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("data/artists.json");
    const { artists } = await res.json();
    const artistList = document.getElementById("artist-list");

    artists.forEach((artist) => {
      const card = document.createElement("div");
      card.classList.add("artist-card");

      card.innerHTML = `
        <div class="artist-image" style="background-image: url(${artist.image})"></div>
        <div class="artist-info">
          <h3>${artist.name}</h3>
          <p><strong>Bio:</strong> ${artist.bio}</p>
          <p><strong>Born:</strong> ${artist.born || "Unknown"}</p>
          <p><strong>Art Style:</strong> ${artist.style || "Not specified"}</p>
        </div>
      `;

      artistList.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading artist data:", error);
  }
});
