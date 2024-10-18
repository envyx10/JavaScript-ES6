<!-- 

Trabajo realizado por Pablo Gil Díaz alias Envy.
Finalizado día 03/10.
Asignatura -  Entorno cliente.
Profesor - J.

-->

<h1>Desarrollo Web en Entorno Cliente - 2º DAW</h1>
<h3>By Pablo Gil Díaz</h3>

![image](https://github.com/user-attachments/assets/4377f231-3a60-4948-8136-cea4a86cfe11)

<h1 id="indice">Índice</h1>
<ul>
  <li><a href="#introducción">Introducción</a></li>
  <li><a href="#caracteristicas">Características</a></li>
  <li><a href="#localstorage">Login y LocalStorage</a></li>
  <li><a href="#code">Code Snippets</a></li>
</ul>

<h1 id="introducción">Introducción</h1>

> [!NOTE]
> Este proyecto es una práctica diseñada para mejorar las habilidades en JavaScript ES6 y Bootstrap 5. La página web creada es completamente responsiva y utiliza las últimas características de ES6 para proporcionar una experiencia de usuario moderna y eficiente.
  
>[!IMPORTANT]
> Proyecto totalmente didáctico para poner en práctica lo aprendido en clase.

<h1 id="localstorage">Actividad de Inicio de Sesión - Login + LocalStorage</h1>

Este proyecto implementa una función de inicio de sesión simple en JavaScript utilizando LocalStorage para gestionar el estado del usuario. A continuación, se describen los puntos clave del código.

## Explicación General del código - Manipulación de Strings

- **Funciones de Manipulación de Strings**: Se definen varias funciones que permiten modificar el contenido de un textarea (`txtarea`). Las funciones incluyen:
  - **`esMayus`**: Convierte todo el texto a mayúsculas.
  - **`esMinus`**: Convierte todo el texto a minúsculas.
  - **`empiezaMayus`**: Capitaliza la primera letra de cada palabra.
  - **`terminaMayus`**: Convierte la última letra de cada palabra a mayúscula.
  - **`empiezaMinus`**: Convierte la última letra de cada palabra a minúscula.
  - **`terminaMinus`**: Deja la última letra en minúscula.
  - **`vocalMayus`**: Convierte todas las vocales a mayúsculas.
  - **`vocalMinus`**: Convierte todas las vocales a minúsculas.
  - **`consMayus`**: Convierte consonantes a mayúsculas.
  - **`consMinus`**: Convierte consonantes a minúsculas.
  - **`esRandom`**: Ejecuta aleatoriamente una de las funciones de manipulación de texto.
  - **Control de intervalos**: Permite ejecutar funciones de manipulación a intervalos regulares con opciones de velocidad.

## Explicación General del código - Gestión de Login y LocalStorage

- **Modo Estricto**: Se utiliza `"use strict";` para mejorar la detección de errores y el rendimiento.
- **Verificación de Login**: Al cargar la página, se comprueba si el usuario ya ha iniciado sesión mediante LocalStorage. Si el estado de `loggedIn` es verdadero, se redirige al usuario a `main.html`.
- **Función de Inicio de Sesión**:
  - **Credenciales**: Se definen las credenciales correctas (`Pablo` y `1234`).
  - **Validación**: Se comprueba si el nombre de usuario tiene al menos 3 caracteres y si coincide con las credenciales.
  - **Redirección**: Si las credenciales son correctas, se guarda el estado de login en LocalStorage y se redirige al usuario.
- **Funciones de LocalStorage**: Se definen funciones para gestionar el almacenamiento local:
  - **`setLocalStorage`**: Almacena un valor en LocalStorage.
  - **`getLocalStorage`**: Recupera un valor de LocalStorage.
  - **`deleteLocalStorage`**: Elimina un valor de LocalStorage.
- **Función de Logout**: Al hacer clic en el elemento de logout, se elimina el estado de login y se redirige al usuario a la página de login.

<h1 id="code">CÓDIGO</h1>

```javascript

/* JS ACTIVIDAD STRING */

"use strict";

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

```javascript
/* ACTIVIDAD LOGINSTORAGE JS */

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

```
```javascript
/* ACTIVIDAD LOCAL STORAGE */

// Funciones para manejar el almacenamiento local
function setLocalStorage(name, value) {
    localStorage.setItem(name, encodeURIComponent(value || ""));
    console.log(`localStorage: ${name}=${encodeURIComponent(value || "")}`);
}

function getLocalStorage(name) {
    const value = localStorage.getItem(name);
    console.log(`localStorage: Recuperado ${name}=${value}`);
    return value ? decodeURIComponent(value) : null;
}

function deleteLocalStorage(name) {
    localStorage.removeItem(name);
    console.log(`localStorage: Eliminada la clave ${name}`);
}

// Función de logout
function logout() {
    const logoutElement = document.getElementById("logout");
    if (logoutElement) {
        logoutElement.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que el enlace se siga
            deleteLocalStorage("loggedIn"); // Elimina el estado de login
            window.location.href = "/ejercicios/login/login.html"; // Redirige al login
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    logout(); // Inicializa la funcionalidad de logout
});
