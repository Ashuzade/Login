function vfun1() {
    // Get form elements
    var username = document.forms["myform2"]["uname1"].value;
    var email = document.forms["myform2"]["email1"].value;
    var password1 = document.forms["myform2"]["upswd1"].value;
    var password2 = document.forms["myform2"]["upswd2"].value;
    var errorBox = document.getElementById("errorBox");
    
    // Clear previous error messages
    errorBox.innerHTML = "";

    // Validate Username
    if (username === "") {
        errorBox.innerHTML += "<p>Username is required.</p>";
        return false;
    }

    // Validate Email
    if (email === "") {
        errorBox.innerHTML += "<p>Email is required.</p>";
        return false;
    } else if (!validateEmail(email)) {
        errorBox.innerHTML += "<p>Invalid email format.</p>";
        return false;
    }

    // Validate Passwords
    if (password1 === "" || password2 === "") {
        errorBox.innerHTML += "<p>Password is required.</p>";
        return false;
    } else if (password1 !== password2) {
        errorBox.innerHTML += "<p>Passwords do not match.</p>";
        return false;
    }

    // Form is valid
    return true;
}

// Function to validate email format
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
