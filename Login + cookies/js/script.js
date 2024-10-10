"use strict"
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("boton");
    const resultado = document.getElementById("resultado");

    if (boton) {
        boton.addEventListener("click", mostrar);
    } else {
        console.log("El elemento con id 'boton' no se encontró en el DOM.");
    }
});
