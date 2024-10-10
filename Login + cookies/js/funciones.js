"use strict"

// Muestra el resultado del ejercicio
function mostrar() {
    console.log(`Estoy mostrando el resultado del ${resultado.getAttribute('name')}`);
    resultado.innerHTML = `Estoy mostrando el resultado del ${resultado.getAttribute('name')}`;
}

// Chekea el status del login para aplicar cookies
function checkLoginStatus() {
    const loginStatus = getCookie("loggedIn");
    console.log("Login status:", loginStatus);

    if (!loginStatus) {
        eraseCookie("loggedIn");
        console.log("No se ha encontrado la cookie. Redirigiendo al login.");
        setTimeout(() => {
            window.location.href = "../ejercicios/login/login.html";
        }, 100);
    } else {
        window.location.href = "../main.html";
    }
}

setInterval(checkLoginStatus, 1000);
