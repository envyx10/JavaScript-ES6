// logout.js

function logout() {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "../../index.html"; // Reemplaza con la ruta a tu página de login
}

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout");
    
    if (logoutButton) {
        logoutButton.addEventListener("click", (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            logout();
        });
    }
});
