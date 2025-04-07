const currentYear = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

// current year
currentYear.innerHTML = new Date().getFullYear();

// last modified date
let lastModified = new Date(document.lastModified);
lastModifiedElement.innerHTML = `Last Modified: ${lastModified.getDate().toString().padStart(2, '0')} / ${(lastModified.getMonth() + 1).toString().padStart(2, '0')} / ${lastModified.getFullYear()}`;

// time stamp
window.onload = function() {
    document.getElementById('timestamp').value = new Date().toLocaleString();
};