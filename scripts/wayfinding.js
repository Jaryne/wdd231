// wayfinding.js
// Function to highlight the current page
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('#navMenu a');

    // Loop through each link and add the 'current' class to the matching one
    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Only process internal links (relative URLs)
        if (href && !href.startsWith('http')) {
            const linkPath = href.split('/').pop();
            if (linkPath === currentPage) {
                link.classList.add('current');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', highlightCurrentPage);