window.addEventListener("load", function() {
    const authData = auth();
    if (authData.success) {
        window.location.href = "../index.html";
    }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const result = register(username, email, password, name, surname);
    result.success ? window.location.href = "../index.html" : alert(result.message);
});