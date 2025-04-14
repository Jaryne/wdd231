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

function displayArtwork(index) {
    const art = artworks[index];
    console.log('Displaying artwork:', art); // ← log what’s loading
  
    const img = document.getElementById('art-img');
    img.src = art.image;
    img.alt = art.title;
  
    document.getElementById('art-title').textContent = art.title;
    document.getElementById('art-year').textContent = art.year;
    document.getElementById('art-description').textContent = art.description;
  }
  