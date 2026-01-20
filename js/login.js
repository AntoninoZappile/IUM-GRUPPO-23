window.addEventListener("load", function() {
    const authData = auth();
    if (authData.success) {
        console.log(authData);
        //window.location.href = "../index.html";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const emailUser = document.getElementById("emailUser").value;
    const password = document.getElementById("password").value;
    const result = login(emailUser, password)
    result.success ? window.location.href = "../index.html" : alert(result.message);
});