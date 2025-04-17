// js/visitorCounter.js
export function trackVisitorCount() {
    let visitorCount = localStorage.getItem("visitorCount") || 0;
    visitorCount++;
    localStorage.setItem("visitorCount", visitorCount);

    const hoverElement = document.getElementById("visitor-counter");
    const counterDisplay = document.getElementById("counter-display");

    hoverElement.addEventListener("mouseenter", function () {
        counterDisplay.textContent = "Visitors: " + visitorCount;
        counterDisplay.style.display = "inline";
    });

    hoverElement.addEventListener("mouseleave", function () {
        counterDisplay.style.display = "none";
    });
}