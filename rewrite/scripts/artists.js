document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("data/artists.json");
    const { artists } = await res.json();
    const artistList = document.getElementById("artist-list");

    // Modal Elements
    const modal = document.getElementById("artistModal");
    const closeModal = document.querySelector(".close");
    const modalImage = document.getElementById("modalArtistImage");
    const modalName = document.getElementById("modalArtistName");
    const modalBio = document.getElementById("modalArtistBio");
    const modalInfo = document.getElementById("modalArtistInfo");

    // open the modal
    function openModal(artist) {
      modal.style.display = "block";
      modal.classList.add('show');
      modalImage.src = artist.image;
      modalName.textContent = artist.name;
      modalBio.textContent = artist.bio;
      modalInfo.textContent = `Born: ${artist.born || "Unknown"} | Style: ${artist.style || "Not specified"}`;
    }

    // to close the modal
    function closeModalFunc() {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = "none"; 
      }, 300);
    }

    // close the modal when the close button is clicked
    closeModal.addEventListener("click", closeModalFunc);

    // close the modal when user clicks anywhere outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModalFunc();
      }
    });

    // artist cards
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

      // open the modal when an artist card is clicked
      card.addEventListener("click", () => openModal(artist));
      artistList.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading artist data:", error);
  }
});
