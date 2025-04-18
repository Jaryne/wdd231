// visitorcounter.js
export function initializeVisitorCounter(hoverElementId, counterDisplayId) {
  let visitorCount = localStorage.getItem("visitorCount") || 0;
  visitorCount++;
  localStorage.setItem("visitorCount", visitorCount);

  const hoverElement = document.getElementById(hoverElementId);
  const counterDisplay = document.getElementById(counterDisplayId);

  hoverElement.addEventListener("mouseenter", function () {
    counterDisplay.textContent = "Visitors: " + visitorCount;
    counterDisplay.style.display = "inline";
  });

  hoverElement.addEventListener("mouseleave", function () {
    counterDisplay.style.display = "none";
  });
}
