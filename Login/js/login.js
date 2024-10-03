"use strict";

function logueo() {

  const credencialUno = "Pablo";
  const credencialDos = "1234";
  
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("click", function (event) { event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
  
    if (user.length < 3) {

      alert("El nombre de usuario debe tener al menos 3 caracteres.");

      return;
  
    } else if (user === credencialUno && pass === credencialDos) {

      /* 
      Accedo a mi archivo main para evitar tener que ocultar los elementos mediante display none,
      a su vez de esta manera me facilita la modificación de la página sin que cada vez que toco código
      vaya hacia el login.
      */

      window.location.href ="../../main.html" ;

    } else {

      alert("El usuario o contraseña es incorrecto");

    }

  });

  document.addEventListener("DOMContentLoaded", logueo);


}





