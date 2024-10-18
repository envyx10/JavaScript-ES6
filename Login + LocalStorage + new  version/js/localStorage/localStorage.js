"use strict";

// Funciones para manejar el almacenamiento local
function setLocalStorage(name, value) {
    localStorage.setItem(name, encodeURIComponent(value || ""));
    console.log(`localStorage: ${name}=${encodeURIComponent(value || "")}`);
}

function getLocalStorage(name) {
    const value = localStorage.getItem(name);
    console.log(`localStorage: Recuperado ${name}=${value}`);
    return value ? decodeURIComponent(value) : null;
}

function deleteLocalStorage(name) {
    localStorage.removeItem(name);
    console.log(`localStorage: Eliminada la clave ${name}`);
}

// Función de logout
function logout() {
    const logoutElement = document.getElementById("logout");
    if (logoutElement) {
        logoutElement.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que el enlace se siga
            deleteLocalStorage("loggedIn"); // Elimina el estado de login
            window.location.href = "/ejercicios/login/login.html"; // Redirige al login
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    logout(); // Inicializa la funcionalidad de logout
});
