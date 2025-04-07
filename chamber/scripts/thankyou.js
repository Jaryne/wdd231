window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('firstNameDisplay').textContent = urlParams.get('firstName');
    document.getElementById('lastNameDisplay').textContent = urlParams.get('lastName');
    document.getElementById('titleDisplay').textContent = urlParams.get('title');
    document.getElementById('emailDisplay').textContent = urlParams.get('email');
    document.getElementById('phoneDisplay').textContent = urlParams.get('phone');
    document.getElementById('orgNameDisplay').textContent = urlParams.get('orgName');
    document.getElementById('membershipDisplay').textContent = urlParams.get('membership');
    document.getElementById('descriptionDisplay').textContent = urlParams.get('description');
    document.getElementById('timestampDisplay').textContent = urlParams.get('timestamp');
}