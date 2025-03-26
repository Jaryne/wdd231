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

  // Display members in the specified view (grid or list)
  function displayMembers(members, viewType) {
      // Clear any existing members
      membersList.innerHTML = "";
      members.forEach(member => {
          const memberDiv = document.createElement("div");
          // Add classes for styling purposes
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

  // Event listener for grid view button
  gridViewBtn.addEventListener("click", function () {
      // Get stored members from localStorage (or fallback to membersData)
      const storedMembers = localStorage.getItem("members");
      if (storedMembers) {
          const members = JSON.parse(storedMembers);
          displayMembers(members, "grid");
      } else {
          displayMembers(membersData, "grid");
      }
  });

  // Event listener for list view button
  listViewBtn.addEventListener("click", function () {
      const storedMembers = localStorage.getItem("members");
      if (storedMembers) {
          const members = JSON.parse(storedMembers);
          displayMembers(members, "list");
      } else {
          displayMembers(membersData, "list");
      }
  });

  // Begin by fetching the members data
  fetchMembers();
});