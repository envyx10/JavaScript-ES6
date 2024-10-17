"use strict";

// Funcion para borrar una cookie
function eraseCookie(name){
    document.cookie = name + "=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
    console.log(document.cookie);
} ;

// Logout
document.addEventListener("DOMContentLoaded", function() {
    const logoutElement = document.getElementById("logout");
    if (logoutElement) {
        logoutElement.addEventListener("click", function() {
            eraseCookie("loggedIn");
            window.location.href = "/ejercicios/login/login.html"; // Ruta absoluta
        });
    }
});

