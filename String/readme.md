<!-- 

Trabajo realizado por Pablo gil diaz alias Envy.
Finalizado dia 03/10.
Asignatura -  Entorno cliente.
Profesor - J.

-->

<h1>Desarrollo Web en Entorno Cliente- 2º DAW</h1>
<h3>By Pablo Gil Diaz</h3>

![image](https://github.com/user-attachments/assets/4377f231-3a60-4948-8136-cea4a86cfe11)

<h1 id="indice">Indice</h1>
<ul>
  <li><a href="#introducción">Introducción</a></li>
  <li><a href="#caracteristicas">Caracteristicas</a></li>
  <li><a href="#actividad-de-inicio-de-sesión---login--cookies">Login</a></li>
  <li><a href="#code-snippets">CodeSnippets</a></li>
  <li><a href="#mockups">Mockups</a></li>
</ul>

<h1 id="introducción">Introducción</h1>

> [!NOTE]
> Este proyecto es una práctica diseñada para mejorar las habilidades en JavaScript ES6 y Bootstrap 5. La página web creada es completamente responsiva y utiliza las últimas características de ES6 para proporcionar una experiencia de usuario moderna y eficiente.
  
>[!IMPORTANT]
> Proyecto totalmente didactico para poner en práctica lo aprendido en clase.

<h1 id="actividad-de-inicio-de-sesión---login--cookies"> Actividad de Inicio de Sesión - Login + cookies </h1>

Este proyecto implementa una función de inicio de sesión simple en JavaScript. 
A continuación se describen los puntos clave del código.

## Explicación General del código version 1.1 - BEFORE cookies

- **Modo Estricto**: Se utiliza `"use strict";` para mejorar la detección de errores y el rendimiento.
- **Credenciales**: Se definen las credenciales correctas (`Pablo` y `1234`).
- **Formulario de Inicio de Sesión**: Se obtiene el formulario de inicio de sesión y se añade un evento de clic para manejar la validación.
- **Validación**: 
  - Se verifica que el nombre de usuario tenga al menos 3 caracteres.
  - Se comparan las credenciales ingresadas con las correctas.
- **Redirección**: Si las credenciales son correctas, se redirige al usuario a `main.html`. Si no, se muestra una alerta de error.
- **Carga del DOM**: La función `logueo` se ejecuta una vez que el contenido del DOM se ha cargado completamente.

## Explicación General del código version 1.2 - POST cookies

Este conjunto de funciones JavaScript maneja las cookies de un sitio web, incluyendo la creación, lectura y eliminación de cookies. También incluye una función para gestionar la acción de logout (cerrar sesión).

- **`setCookie`**: Esta función crea una nueva cookie. Acepta el nombre de la cookie, su valor y la duración en minutos. Si se especifica una duración, la cookie se establece con una fecha de expiración.
- **`eraseCookie`**: Esta función elimina una cookie específica estableciéndola con una fecha de expiración pasada.
- **`getCookie`**: Esta función busca y devuelve el valor de una cookie específica. Si no encuentra la cookie, retorna `null`.
- **Logout**: Un event listener en `DOMContentLoaded` busca un elemento con el ID `logout` y, al hacer clic, elimina la cookie `loggedIn` y redirige al usuario a la página de login.

## Código

```javascript
"use strict";
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

```

> [!NOTE]
> - <strong>Bootstrap 5 </strong>: Utilización del framework Bootstrap 5 para un diseño responsivo y atractivo. <br>
> - <strong>JavaScript ES6 </strong>: Implementación de funcionalidades interactivas utilizando las características avanzadas de ES6. <br>
> - <strong>Ejercicios Prácticos </strong>: Dos ejercicios interactivos que muestran resultados mediante JavaScript. <br>
> - <strong>Diseño Moderno </strong>: Interfaz de usuario limpia y moderna, optimizada para dispositivos móviles y de escritorio.



<h1 id="code">Code snippets</h1>
He utilizado los siguientes: <br>

- Bootstrap 5 <br>
- w3school  <br>
- copilot
