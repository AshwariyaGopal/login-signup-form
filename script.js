document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    var showSignup = document.getElementById("show-signup");
    var showLogin = document.getElementById("show-login");
    var loginBtn = document.getElementById("login-btn");
    var signupBtn = document.getElementById("signup-btn");
    // Login Form Switch to Signup
    showSignup.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });
    // Signup Form Switch to Login
    showLogin.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
    // Handle Login
    loginBtn.addEventListener("click", function () {
        var email = document.getElementById("login-email").value;
        var password = document.getElementById("login-password").value;
        if (email === "" || password === "") {
            alert("Please fill all fields!");
            return;
        }
        // Simulate login request
        console.log("Logging in with ".concat(email));
        alert("Login successful!");
    });
    // Handle Signup
    signupBtn.addEventListener("click", function () {
        var name = document.getElementById("signup-name").value;
        var email = document.getElementById("signup-email").value;
        var password = document.getElementById("signup-password").value;
        var confirmPassword = document.getElementById("signup-confirm-password").value;
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields!");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Simulate signup request
        console.log("Signing up with ".concat(name, ", ").concat(email));
        alert("Signup successful!");
        // Redirect to login form after signup
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
});
