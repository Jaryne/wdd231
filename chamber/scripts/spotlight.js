document.addEventListener("DOMContentLoaded", async function () {
    const spotlightContainer = document.getElementById("members-list");

    async function fetchMembers() {
        try {
            localStorage.removeItem("members");
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Failed to fetch members data.");
            const data = await response.json();
            localStorage.setItem("members", JSON.stringify(data));
            displaySpotlight(data);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function getSpotlightMembers(members) {
        return members.filter(member => {
            const normalizedMembership = member.membership.trim().toLowerCase();
            return normalizedMembership === "gold" || normalizedMembership === "silver";
        }).sort(() => Math.random() - 0.5).slice(0, 3);
    }

    function displaySpotlight(members) {
        const spotlightMembers = getSpotlightMembers(members);
        spotlightContainer.innerHTML = "";

        spotlightMembers.forEach(member => {
            const card = `
                <div class="spotlight-card">
                    <img src="${member.image}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><strong>Membership:</strong> ${member.membership}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;
            spotlightContainer.innerHTML += card;
        });
    }

    // Fetch new members or use stored data
    const storedMembers = localStorage.getItem("members");
    if (storedMembers) {
        displaySpotlight(JSON.parse(storedMembers));
    } else {
        fetchMembers();
    }
});