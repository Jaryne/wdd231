// update currentyear
document.getElementById('currentyear').textContent = new Date().getFullYear();

//update last modified date
document.getElementById("lastModified").textContent = "Last Update: " + new Date(document.lastModified).toLocaleString();