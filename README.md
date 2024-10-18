<!-- 

Trabajo realizado por Pablo gil diaz alias Envy.
Finalizado dia 03/10.
Asignatura - Entorno cliente.
Profesor - J.

-->

<h1>Desarrollo Web en Entorno Cliente- 2º DAW</h1>
<h3>By Pablo Gil Diaz</h3>

![image](https://github.com/user-attachments/assets/4377f231-3a60-4948-8136-cea4a86cfe11)

<h1 id="introduccion">Introducción</h1>

> [!NOTE]
> Este proyecto es una práctica diseñada para mejorar las habilidades en JavaScript ES6 y Bootstrap 5. La página web creada es completamente responsiva y utiliza las últimas características de ES6 para proporcionar una experiencia de usuario moderna y eficiente.

>[!IMPORTANT]
> Proyecto totalmente didactico para poner en práctica lo aprendido en clase.

<h1 id="caracteristicas">Caracteristicas</h1>

> [!NOTE]
> - **Bootstrap 5**: Utilización del framework Bootstrap 5 para un diseño responsivo y atractivo. <br>
> - **JavaScript ES6**: Implementación de funcionalidades interactivas utilizando las características avanzadas de ES6. <br>
> - **Ejercicios Prácticos**: Dos ejercicios interactivos que muestran resultados mediante JavaScript. <br>
> - **Diseño Moderno**: Interfaz de usuario limpia y moderna, optimizada para dispositivos móviles y de escritorio.

<h1 id="code-snippets">Code snippets</h1>
He utilizado los siguientes:

- Bootstrap 5
- w3school
- copilot

<h1 id="mockups">Mockups</h1>

![login_mock](https://github.com/user-attachments/assets/b2ed1c56-b44d-4229-8078-c32be1b102af)
![mockup_mobile-me](https://github.com/user-attachments/assets/1298a1bb-cc49-4d53-ac02-ebf8f45827ad)
![mockup_main](https://github.com/user-attachments/assets/543e98e0-b3c6-4f31-9847-65590f033947)
![mockup_EJ01](https://github.com/user-attachments/assets/964bef26-c172-42d0-a063-4abaa585904a)

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

