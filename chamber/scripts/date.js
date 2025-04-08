document.addEventListener("DOMContentLoaded", function() {
    // current year
    const currentYear = document.getElementById('currentyear');
    if (currentYear) {
        currentYear.innerHTML = new Date().getFullYear();
    }

    // last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        let lastModified = new Date(document.lastModified);
        lastModifiedElement.innerHTML = `Last Modified: ${lastModified.getDate().toString().padStart(2, '0')} / ${(lastModified.getMonth() + 1).toString().padStart(2, '0')} / ${lastModified.getFullYear()}`;
    }

    // timestamp
    const timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        timestampElement.value = new Date().toLocaleString();
    }

    // last visit message
    const lastVisitMessage = document.getElementById("last-visit-message");
    if (lastVisitMessage) {
        const lastVisit = localStorage.getItem("lastVisit");
        const now = Date.now();

        if (!lastVisit) {
            lastVisitMessage.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const timeDifference = now - parseInt(lastVisit, 10);
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            if (daysDifference < 1) {
                lastVisitMessage.textContent = "Back so soon! Awesome!";
            } else {
                const dayWord = daysDifference === 1 ? "day" : "days";
                lastVisitMessage.textContent = `You last visited ${daysDifference} ${dayWord} ago.`;
            }
        }

        // store current timestamp for future visits
        localStorage.setItem("lastVisit", now);
    }
});