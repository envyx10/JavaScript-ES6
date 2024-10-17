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
  <li><a href="#actividad-de-inicio-de-sesión---login--cookies">Login</a></li>
  <li><a href="#code-snippets">CodeSnippets</a></li>
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

// Función para almacenar una cookie
function setCookie(name, value, minutes) {
    let expires = "";
    if (minutes) {
        const date = new Date();
        console.log(date); // actual
        date.setTime(date.getTime() + minutes * 60 * 1000);
        console.log(date); // 1 minuto mas
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=Strict; Secure";
    console.log(document.cookie);
}

// Función para borrar una cookie
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure";
    console.log(document.cookie);
}

// Logout
document.addEventListener("DOMContentLoaded", function() {
    const logoutElement = document.getElementById("logout");
    if (logoutElement) {
        logoutElement.addEventListener("click", function() {
            eraseCookie("loggedIn");
            window.location.href = "/ejercicios/login/login.html"; // Ruta absoluta
        });
    }
});

"use strict";

// Función para leer una cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    console.log(`cookies almacenadas: ${cookies}`);

    for (let cookie of cookies) {
        cookie = cookie.trim();
        console.log(`Clave: ${cookie}`);

        if (cookie.indexOf(nameEQ) === 0) {
            console.log(`Valor: ${cookie.substring(nameEQ.length)}`);
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
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