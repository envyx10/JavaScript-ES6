// Función de inicio de sesión
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            // Verificar longitud del nombre de usuario
            if (user.length < 3) {
                alert("El nombre de usuario debe tener al menos 3 caracteres.");
                return;
            }

            // Llamar a la función de verificación de credenciales
            checkCredentials(user, pass);
        });
    }
});
