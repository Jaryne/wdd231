const currentYear = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

// current year
currentYear.innerHTML = new Date().getFullYear();

// last modified date
let lastModified = new Date(document.lastModified);
lastModifiedElement.innerHTML = `Last Modified: ${lastModified.getDate()} / ${lastModified.getMonth() + 1} / ${lastModified.getFullYear()}`;