"use strict";

// Verificar si el usuario ya ha iniciado sesión
if (getLocalStorage("loggedIn") === "true") {
    // Si el usuario ya ha iniciado sesión, redirigir a main.html
    window.location.href = "../../main.html";
}

// Función de inicio de sesión
function logueo() {
    const credencialUno = "Pablo";
    const credencialDos = "1234";

    const loginForm = document.getElementById("loginForm");

    // Asegúrate de que loginForm sea un elemento de formulario
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            if (user.length < 3) {
                alert("El nombre de usuario debe tener al menos 3 caracteres.");
                return;
            } else if (user === credencialUno && pass === credencialDos) {
                // Guardar estado de login en localStorage
                setLocalStorage("loggedIn", "true");
                window.location.href = "../../main.html";
            } else {
                alert("El usuario o contraseña es incorrecto");
            }
        });
    }
}

// Escuchar el evento DOMContentLoaded para ejecutar logueo
document.addEventListener("DOMContentLoaded", function () {
    logueo();
});
