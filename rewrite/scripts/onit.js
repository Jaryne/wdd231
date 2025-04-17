document.addEventListener("DOMContentLoaded", () => {
    const query = new URLSearchParams(window.location.search);

    document.getElementById("firstName").textContent = query.get("firstName") || "N/A";
    document.getElementById("lastName").textContent = query.get("lastName") || "N/A";
    document.getElementById("email").textContent = query.get("email") || "N/A";
    document.getElementById("suggestion").textContent = query.get("suggestion") || "N/A";
});  