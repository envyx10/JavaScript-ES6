"use strict";

/* 

## Llamamos los 
Scripts de las funciones

*/

document.addEventListener('DOMContentLoaded', () => {

    // ·· Mayúsculas ·· //
    document.getElementById("AZ").addEventListener("click" , esMayus );

    // ·· Minúsculas·· //
    document.getElementById("az").addEventListener("click" , esMinus);

    // ·· Empiecen en Mayúsculas ·· //
    document.getElementById("A__").addEventListener("click" , empiezaMayus); 

    // ·· Terminen en Mayúsculas ·· //
    document.getElementById("__Z").addEventListener("click" , terminaMayus ); 

    // ·· Empieza en minúsculas ·· //
    document.getElementById("a__").addEventListener("click" , empiezaMinus ); 

    // ·· termina en minúsculas ·· //
    document.getElementById("__z").addEventListener("click" , terminaMinus );

    // ·· vocales en Mayúsculas ·· //
    document.getElementById("AEIOU").addEventListener("click" , vocalMayus);

    // ·· vocales en minúsculas ·· //
    document.getElementById("aeiou").addEventListener("click" , vocalMinus);

    // ··consonantes Mayúsculas ·· //
    document.getElementById("BCD").addEventListener("click" , consMayus );

    // ·· consonantes minúsculas·· //
    document.getElementById("BCD").addEventListener("click" , consMinus );

    // ·· Intervalos ·· // && // ·· Random ·· //
    document.getElementById("Aleatorio").addEventListener("click" , esRandom);

    document.getElementById("Rapido").addEventListener("click" ,  superRapido);

    document.getElementById("Lento").addEventListener("click"  ,  lento);

    document.getElementById("Parar").addEventListener("click"  ,  pararIntervalos);
})
