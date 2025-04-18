function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const suggestion = document.getElementById("suggestion").value.trim();

    if (firstName.length < 2) {
        alert("First name must be at least 2 characters long.");
        return false;
    }

    if (lastName.length < 2) {
        alert("Last name must be at least 2 characters long.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (suggestion.length < 10) {
        alert("Please enter a more detailed suggestion (at least 10 characters).");
        return false;
    }

    return true;
}  