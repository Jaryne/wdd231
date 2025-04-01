document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.querySelector(".hamburger");
    const overlay = document.getElementById("overlay");
    const membersList = document.getElementById("members-list");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    // Global variable to store members data
    let membersData = [];

    // Function to toggle navigation menu
    function toggleMenu() {
        const isMenuOpen = navMenu.classList.contains("slide-in");
        navMenu.classList.toggle("slide-in", !isMenuOpen);
        navMenu.classList.toggle("slide-out", isMenuOpen);
        overlay.classList.toggle("show", !isMenuOpen); // Toggle overlay visibility
    }

    // Add event listener to hamburger menu and overlay
    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    // Highlight the current page in navigation
    const currentPage = window.location.pathname;
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Fetch members data from a JSON file
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) {
                throw new Error("Error fetching members data: " + response.statusText);
            }
            const data = await response.json();
            membersData = data;
            localStorage.setItem("members", JSON.stringify(data)); // Store data for toggling
            displayMembers(data, "grid"); // Default view
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    // Display members in the specified view type
    function displayMembers(members, viewType) {
        membersList.innerHTML = ""; // Clear the list before adding new content

        // Remove both grid-view and list classes before applying the new one
        membersList.classList.remove("grid-view", "list");

        // Add the appropriate class based on the viewType
        membersList.classList.add(viewType === "grid" ? "grid-view" : "list");

        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member", viewType); // Add appropriate class for grid/list view

            let memberContent = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.membership}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

            // Only add the image for the grid view
            if (viewType === "grid") {
                memberContent = `
                <img src="${member.image}" alt="${member.name} logo">
                ${memberContent}
            `;
            }

            memberDiv.innerHTML = memberContent;
            membersList.appendChild(memberDiv);
        });
    }
    
    // Grid/List View Toggle
    function handleViewToggle(viewType) {
        const storedMembers = localStorage.getItem("members");
        const members = storedMembers ? JSON.parse(storedMembers) : membersData;
        displayMembers(members, viewType);
    }

    // Event listeners for grid and list view buttons
    gridViewBtn.addEventListener("click", () => handleViewToggle("grid"));
    listViewBtn.addEventListener("click", () => handleViewToggle("list"));

    // Initialize by fetching members data
    fetchMembers();
});
