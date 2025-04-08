const currentYear = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
const lastVisitMessage = document.getElementById('last-visit-message');

// current year
currentYear.innerHTML = new Date().getFullYear();

// last modified date
let lastModified = new Date(document.lastModified);
lastModifiedElement.innerHTML = `Last Modified: ${lastModified.getDate().toString().padStart(2, '0')} / ${(lastModified.getMonth() + 1).toString().padStart(2, '0')} / ${lastModified.getFullYear()}`;

// time stamp
window.onload = function() {
    document.getElementById('timestamp').value = new Date().toLocaleString();
};

// time stamp for last visit
document.addEventListener("DOMContentLoaded", function() {
    const lastVisitMessage = document.getElementById("last-visit-message");

    if (lastVisitMessage) {
        const lastVisit = localStorage.getItem("lastVisit");

        if (lastVisit) {
            lastVisitMessage.textContent = `Your last visit was on ${lastVisit}`;
        } else {
            lastVisitMessage.textContent = "Welcome! Let us know if you have any questions.";
        }

        // Add fade-in effect
        setTimeout(() => {
            lastVisitMessage.style.opacity = "1";
        }, 300);
        
        localStorage.setItem("lastVisit", new Date().toLocaleString());
    }
});