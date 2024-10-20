<!-- 

Trabajo realizado por Pablo Gil Díaz alias Envy.
Asignatura -  Entorno cliente.

-->

# Última Versión - Nuevas Modificaciones

**Estructura de Carpetas**
En esta nueva versión, se ha reorganizado completamente la estructura de carpetas para mejorar la organización y facilitar la navegación:

- **localStorage**: Contiene todos los documentos relacionados con el almacenamiento local.
- **Strings**: Incluye todos los documentos que tratan sobre la manipulación de cadenas de texto.

## <b>Ejercicios</b>
Se ha simplificado los ejercicios disponibles. Los ejercicios básicos iniciales han sido eliminados y se han mantenido aquellos a partir de `plantilla03`, los cuales ofrecen un mayor valor educativo.

## <b>Nav-bar Mejorado</b>
El navbar ha sido rediseñado para ser más sencillo y directo. Ahora incluye:

- **Enlace a GitHub**: Un acceso directo a mi repositorio.
- **Subselect de Ejercicios**: Un menú desplegable que contiene los ejercicios a entregar.
- **Icono de logout**: Botón para desloguearte de la sesión e ir al login.

## <b>Cambios en el `main.html`</b>
- El archivo `main.html` ha recibido una actualización menor. La sección "About Me" ahora presenta una breve introducción personal, ofreciendo una visión rápida sobre quién soy.

- El archivo `main.html` también ha sufrido un cambio de organización y ahora está ubicado dentro de una carpeta llamada `main`. He decidido destacar el archivo `login.html` principalmente por cuestiones de organización.

## <b>Datos IMPORTANTES a tener en cuenta</b>
- Es necesario ejecturar el ejercicio mediante **LiveServer** para ver el funcionamiento completo, dado que puede generar fallos en la preview de web en github.

- Al usar localStorage para gestionar la sesión, una vez que inicias sesión, siempre serás dirigido al main.html porque se reconoce que ya has iniciado sesión, similar a cómo funcionan las cookies. Para volver a la pantalla de inicio de sesión, utiliza la funcionalidad de cierre de sesión (logout).


## <b>Explicación General del código - Manipulación de Strings</b>
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

## <b>Explicación General del código - Gestión de Login y LocalStorage</b>

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


## Incluye API simple de rick and morty
Rick and Morty API
La API de Rick and Morty es una interfaz RESTful que proporciona acceso a información sobre los personajes, episodios y localizaciones de la popular serie animada "Rick and Morty".


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

```

```javascript

// API RICK AND MORTY

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('load-characters-btn').addEventListener('click', () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
                const textarea = document.getElementById('txtarea');
                textarea.value = randomCharacter.name;
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    });
});
