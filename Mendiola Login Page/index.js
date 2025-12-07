function validate() {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (email === "") {
        alert("Email is required.");
        return false;
    }

    if (pass === "") {
        alert("Password is required.");
        return false;
    }

    alert("Form Submitted!");
    return true;
}
