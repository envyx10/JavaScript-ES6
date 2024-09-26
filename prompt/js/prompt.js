"use strict"

const nameuser = "Pablo";
const passuser = "1234";

let user ;
let pass ;
let confirmacion ;

function esLogin(){
    
    user = prompt("Please enter your name", "Name");
    pass = prompt("Please enter your password", "Password");
    
    if (user === "" || pass === "") {
        alert("Acceso cancelado");
    } else if ( user === nameuser && pass === passuser){
        alert("Bienvenido");
        document.getElementById("prompt").style.display="block";
    } else {
        alert("Estas credenciales son incorrectas.");

        confirmacion = confirm("¿ Deseas intentarlo de nuevo ?");

        if(confirmacion){
            esLogin();
        } else {
            alert("Acceso cancelado delincuente")
        }

    }

}

window.onload = function(){
    esLogin();
}

