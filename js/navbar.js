window.addEventListener("load", function() {
    const userArea = document.getElementById("userArea");
    const appuntiLink = document.getElementById("appuntiLink");
    const forumLink = document.getElementById("forumLink");
    const userAuth = auth();
    if (userAuth.success) {
        userArea.innerHTML = `
            <li><a href="#" class="text-base hover:text-primary">Ciao, ${userAuth.account.name}</a></li>
            <span class="slash">/</span>
            <li><a href="#" id="logoutBtn" class="text-base hover:text-primary">Esci</a></li>
        `;
        document.getElementById("logoutBtn").addEventListener("click", function(event) {
            event.preventDefault();
            logout();
            window.location.href = "index.html";
        });
    } else {
        appuntiLink.remove();
        forumLink.remove();

        if (window.location.pathname.search("forum") !== -1 || window.location.pathname.search("appunti") !== -1 || window.location.pathname.search("chat") !== -1) 
            this.window.location.href = "../index.html";
    }
});