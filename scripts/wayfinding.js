// wayfinding.js

// Function to highlight the current page
function highlightCurrentPage() {
    // Get the current page's file name
    const currentPage = window.location.pathname.split('/').pop();

    // Get all navigation links
    const navLinks = document.querySelectorAll('#navMenu a');

    // Loop through each link and add the 'current' class to the matching one
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop(); // Get the file name from href
        if (linkPath === currentPage) {
            link.classList.add('current'); // Add the 'current' class to the active link
        }
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', highlightCurrentPage);