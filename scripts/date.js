// update currentyear
// document.getElementById('currentyear').textContent = new Date().getFullYear();

//update last modified date
// document.getElementById("lastModified").textContent = "Last Update: " + new Date(document.lastModified).toLocaleString();

const currentYear = document.getElementById('currentyear');
let lastModified = new Date(document.lastModified);
currentYear.innerHTML = `Last Modified: ${lastModified.getDate()} / ${lastModified.getMonth()+1} / ${lastModified.getFullYear()}`;