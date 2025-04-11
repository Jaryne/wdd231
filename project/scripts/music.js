document.getElementById("music-toggle").addEventListener("click", function() {
    let spotifyPlayer = document.getElementById("spotify-player");
    
    if (spotifyPlayer.style.display === "none") {
        spotifyPlayer.style.display = "block";
    } else {
        spotifyPlayer.style.display = "none";
    }
});