"use strict";

// Función para almacenar una cookie
function setCookie(name, value, minutes ){

    let expires = "";
    if(minutes){

        const date = new Date();
        console.log(date); // actual
        date.setTime(date.getTime() + minutes * 60 * 1000);
        console.log(date); // 1 minuto mas
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=Strict; Secure";
    console.log(document.cookie);

}