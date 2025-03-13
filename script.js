document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = this.username.value;
    const password = this.password.value;

    if (username === "admin" && password === "1234") {
        alert("Login successful!");

    } else {
        alert("Invalid username or password.");
    }
});