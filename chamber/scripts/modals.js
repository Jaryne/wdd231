// modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// close modal when clicking outside of the modal area
window.onclick = function (event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

// Im putting the form js here too
// email validation (ensures proper format)
document.getElementById("email").addEventListener("input", function () {
    if (!this.value.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)) {
        this.setCustomValidity("Please enter a valid email address.");
    } else {
        this.setCustomValidity("");
    }
});

// organizational title validation (enforces 7+ characters with letters, hyphens, and spaces)
document.getElementById("title").addEventListener("input", function () {
    if (!this.value.match(/^[A-Za-z\s-]{7,}$/)) {
        this.setCustomValidity("Organizational Title must be at least 7 characters using only letters, hyphens, and spaces.");
    } else {
        this.setCustomValidity("");
    }
});

// phone number validation (requires at least 10 digits)
document.getElementById("phone").addEventListener("input", function () {
    if (!this.value.match(/^\d{10,}$/)) {
        this.setCustomValidity("Enter a valid phone number with at least 10 digits.");
    } else {
        this.setCustomValidity("");
    }
});

// final form validation to prevent submission if inputs are incorrect
function validateForm() {
    let title = document.getElementById("title").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (!title.match(/^[A-Za-z\s-]{7,}$/)) {
        alert("Organizational Title must be at least 7 characters.");
        return false;
    }

    if (!email.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phone.match(/^\d{10,}$/)) {
        alert("Enter a valid phone number with at least 10 digits.");
        return false;
    }

    return true;
}