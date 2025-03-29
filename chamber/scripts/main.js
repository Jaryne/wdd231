document.addEventListener("DOMContentLoaded", function () {
    const membersList = document.getElementById("members-list");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.querySelector(".hamburger");

    // Global variable to store members data
    let membersData = [];

    // Function to toggle navigation menu
    function toggleMenu() {
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
        }
    }

    // Add event listener to hamburger menu
    hamburger.addEventListener("click", toggleMenu);
    function toggleMenu() {
        const navMenu = document.getElementById("navMenu");
        const overlay = document.getElementById("overlay");

        // Toggle menu visibility
        if (navMenu.classList.contains("slide-in")) {
            navMenu.classList.remove("slide-in");
            navMenu.classList.add("slide-out");
            overlay.classList.remove("show"); // Hide overlay
        } else {
            navMenu.classList.remove("slide-out");
            navMenu.classList.add("slide-in");
            overlay.classList.add("show"); // Show overlay
        }
    }

    // For highlighting current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Fetch members from a JSON file
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) {
                throw new Error("Error fetching members data: " + response.statusText);
            }
            const data = await response.json();
            membersData = data;
            // Store the data in localStorage for view toggling
            localStorage.setItem("members", JSON.stringify(data));
            // Initially display members as a grid
            displayMembers(data, "grid");
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    // Display members in the specified view (grid or list -- still working on it)
    function displayMembers(members, viewType) {
        membersList.innerHTML = "";
        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member", viewType);

            memberDiv.innerHTML = `
              <img src="${member.image}" alt="${member.name} logo">
              <h3>${member.name}</h3>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <a href="${member.website}" target="_blank">Visit Website</a>
          `;
            membersList.appendChild(memberDiv);
        });
    }

    gridViewBtn.addEventListener("click", function () {
        const storedMembers = localStorage.getItem("members");
        if (storedMembers) {
            const members = JSON.parse(storedMembers);
            displayMembers(members, "grid");
        } else {
            displayMembers(membersData, "grid");
        }
    });

    listViewBtn.addEventListener("click", function () {
        const storedMembers = localStorage.getItem("members");
        if (storedMembers) {
            const members = JSON.parse(storedMembers);
            displayMembers(members, "list");
        } else {
            displayMembers(membersData, "list");
        }
    });

    fetchMembers();
});