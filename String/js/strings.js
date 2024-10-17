"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const textarea = document.getElementById("txtarea");

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


// ·· FUNCIONES GRANDES LAS GENERO AQUI ··//
// ·· PARA LLAMAR POSTERIORMENTE A LAS FUNCIONES PARA MEJOR LEGIBILIDAD. ··//

function esMayus(){
    const textarea = document.getElementById("txtarea");
    textarea.value = textarea.value.toUpperCase();
}

// ·· //
function esMinus(){
    const textarea = document.getElementById("txtarea");
    textarea.value = textarea.value.toLowerCase();
}

// ·· //
function empiezaMayus(){

       const textarea = document.getElementById("txtarea");

        // Empiecen en Mayus
        const palabra = textarea.value.split(" ");
        let longuitud = palabra.length;
        let resultado = "";
    
        for ( let i = 0 ; i < longuitud ; i++){
    
            const palabraArray = palabra[i];
    
            if (palabraArray.length > 0) {
                resultado += palabraArray.charAt(0).toUpperCase() + palabraArray.slice(1) + " ";
            }
                
        }
    
        textarea.value = resultado.trim(); 

}

// ·· //
function terminaMayus(){

    const textarea = document.getElementById("txtarea");

    const palabra = textarea.value.split(" ");
    let longuitud = palabra.length;

    let resultado = "";

    for ( let i = 0 ; i < longuitud ; i++){

        const palabraArray = palabra[i];

        if (palabraArray.length > 0) {
            resultado += palabraArray.slice(0, -1) + palabraArray.charAt(palabraArray.length - 1).toUpperCase() + " ";
         }
            
     }

     textarea.value = resultado.trim(); 

}

// ·· //
function empiezaMinus(){

    const textarea = document.getElementById("txtarea");

    const palabra = textarea.value.split(" ");
    let longuitud = palabra.length;

    let resultado = "";

    for ( let i = 0 ; i < longuitud ; i++){

        const palabraArray = palabra[i];

        if (palabraArray.length > 0) {
            resultado += palabraArray.slice(0, -1) + palabraArray.charAt(palabraArray.length - 1).toLowerCase() + " ";
        }
            
    }

    textarea.value = resultado.trim(); 

}

// ·· //
function terminaMinus(){

    const textarea = document.getElementById("txtarea");
    const palabra = textarea.value.split(" ");
    let longuitud = palabra.length;

    let resultado = "";

    for ( let i = 0 ; i < longuitud ; i++){

        const palabraArray = palabra[i];

        if (palabraArray.length > 0) {
            resultado += palabraArray.slice(0, -1) + palabraArray.charAt(palabraArray.length - 1).toLowerCase() + " ";
        }
            
    }

    textarea.value = resultado.trim(); 

}

//··//
function vocalMayus(){
    const textarea = document.getElementById("txtarea");
    textarea.value = textarea.value.replace(/[AEIOU]/gi, palabra => palabra.toUpperCase());
}

//··//
function vocalMinus(){
    const textarea = document.getElementById("txtarea");
    textarea.value = textarea.value.replace(/[AEIOU]/gi, palabra => palabra.toLowerCase());
}

//··//
function consMayus(){
    const textarea = document.getElementById("txtarea");
    const regex = /(?<consonantes>[BCHDFGJKLMNÑPRSVXZ]{1,2})|(?<vocales>[aeiou])/g;

    textarea.value = textarea.value.replace(regex, palabra => palabra.toUpperCase())

}

//··//
function consMinus(){
    const textarea = document.getElementById("txtarea");
    const regex = /(?<consonantes>[BCHDFGJKLMNÑPRSVXZ]{1,2})|(?<vocales>[aeiou])/g;

    textarea.value = textarea.value.replace(regex, palabra => palabra.toLowerCase())
}

//··//
function esRandom() {
    const textarea = document.getElementById("txtarea");
    const funciones = [
        () => esMayus(textarea),
        () => esMinus(textarea),
        () => empiezaMayus(textarea),
        () => empiezaMinus(textarea),
        () => terminaMayus(textarea),
        () => terminaMinus(textarea),
        () => consMayus(textarea),
        () => consMinus(textarea),
        () => vocalMayus(textarea),
        () => vocalMinus(textarea)
    ]; // Array para ahorrar hacer un switch

    const funcionAleatoria = funciones[Math.floor(Math.random() * funciones.length)];
    funcionAleatoria();
}

// ·· Intervalos ·· //
let intervalo; 

function superRapido() {
    clearInterval(intervalo); 
    esRandom(); 
    intervalo = setInterval(esRandom, 100); 
}

function lento() {
    clearInterval(intervalo); 
    esRandom(); 
    intervalo = setInterval(esRandom, 2000); 
}

function pararIntervalos() {
    clearInterval(intervalo); 
    intervalo = null; // Opcional: Reiniciar intervalo a null para mayor claridad
}