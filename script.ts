document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form") as HTMLElement;
    const signupForm = document.getElementById("signup-form") as HTMLElement;
    const showSignup = document.getElementById("show-signup") as HTMLAnchorElement;
    const showLogin = document.getElementById("show-login") as HTMLAnchorElement;
    const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
    const signupBtn = document.getElementById("signup-btn") as HTMLButtonElement;

    // Login Form Switch to Signup
    showSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    // Signup Form Switch to Login
    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Handle Login
    loginBtn.addEventListener("click", () => {
        const email = (document.getElementById("login-email") as HTMLInputElement).value;
        const password = (document.getElementById("login-password") as HTMLInputElement).value;

        if (email === "" || password === "") {
            alert("Please fill all fields!");
            return;
        }

        // Simulate login request
        console.log(`Logging in with ${email}`);
        alert("Login successful!");
    });

    // Handle Signup
    signupBtn.addEventListener("click", () => {
        const name = (document.getElementById("signup-name") as HTMLInputElement).value;
        const email = (document.getElementById("signup-email") as HTMLInputElement).value;
        const password = (document.getElementById("signup-password") as HTMLInputElement).value;
        const confirmPassword = (document.getElementById("signup-confirm-password") as HTMLInputElement).value;

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Simulate signup request
        console.log(`Signing up with ${name}, ${email}`);
        alert("Signup successful!");

        // Redirect to login form after signup
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
});
