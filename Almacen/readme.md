<!-- 

Trabajo realizado por Pablo Gil Díaz alias Envy.
Asignatura -  Entorno cliente.

-->

# Última Versión - Nuevas Modificaciones

**Estructura de Carpetas**
En esta nueva versión, se ha reorganizado completamente la estructura de carpetas para mejorar la organización y facilitar la navegación, ahora cada carpeta de cada ejercicio contiene su propio JS a excepcion de los generales como la API o el script del logout que se encuentran en la carpeta JS

## <b>Ejercicios</b>
Se ha simplificado los ejercicios disponibles. Los ejercicios básicos iniciales han sido eliminados y se han mantenido aquellos a partir de `plantilla03`, los cuales ofrecen un mayor valor educativo.

## <b>Nav-bar Mejorado</b>
El navbar ha sido rediseñado para ser más sencillo y directo. Ahora incluye:

- **Enlace a GitHub**: Un acceso directo a mi repositorio.
- **Subselect de Ejercicios**: Dos menús desplegable que contienen los ejercicios a entregar.
- **Icono de logout**: Botón para desloguearte de la sesión e ir al login.

## <b>Cambios en el `main.html`</b>
- El archivo `main.html` ha recibido una actualización menor. La sección "About Me" ahora presenta una breve introducción personal, ofreciendo una visión rápida sobre quién soy.

- El archivo `main.html` también ha sufrido un cambio de organización y ahora está ubicado dentro de una carpeta llamada `main`. He decidido destacar el archivo `login.html` principalmente por cuestiones de organización.

## <b>Datos IMPORTANTES a tener en cuenta</b>
- Es necesario ejecturar el ejercicio mediante **LiveServer** para ver el funcionamiento completo, dado que puede generar fallos en la preview de web en github.

- Al usar localStorage para gestionar la sesión, una vez que inicias sesión, siempre serás dirigido al main.html porque se reconoce que ya has iniciado sesión, similar a cómo funcionan las cookies. Para volver a la pantalla de inicio de sesión, utiliza la funcionalidad de cierre de sesión (logout).


## Cómo Ejecutar el Proyecto

1. Abre `index.html` en tu navegador usando un servidor local, este te llevará al login, logueate con uno de estos usuarios : <br>

```javascript
        { username: "Pablo", password:  "1234" },
        { username: "Jota",  password:  "1234" },
        { username: "Paco",  password:  "1234" },
        { username: "Ruyi",  password:  "1234" },
```

2. Interactúa con los formularios para agregar, cargar y visualizar datos utilizando Cookies, LocalStorage, SessionStorage e IndexedDB.
3. Abre las herramientas de desarrollo de tu navegador (F12) y navega a la pestaña **Application** para ver los datos almacenados.


## Descripción General

### 1. Cookies

En este proyecto, se ha implementado un sistema para guardar, cargar y eliminar datos utilizando cookies. Se han manejado datos como nombre, valor e imagen, y se ha mostrado cómo editar y actualizar estos datos en la interfaz de usuario.

#### Funciones Principales:
- `saveCookie(nombre, valor, imageUrl)`: Guarda una cookie con un nombre, valor y URL de imagen.
- `loadDataFromCookies()`: Carga datos de las cookies y los muestra en la página.
- `deleteCookie(nombre)`: Elimina una cookie específica.
- `updateCookie(nombre)`: Actualiza los datos de una cookie existente.

### 2. LocalStorage

LocalStorage permite almacenar datos de manera persistente en el navegador sin fecha de expiración. Los datos permanecen hasta que el usuario los elimine explícitamente.

Se ha implementado una funcionalidad para guardar, cargar y mostrar datos utilizando LocalStorage, lo que permite mantener los datos incluso después de cerrar y reabrir el navegador.

#### Funciones Principales:
- `saveToLocalStorage(nombre, valor, imageUrl)`: Guarda datos en LocalStorage.
- `loadDataFromLocalStorage()`: Carga y muestra datos desde LocalStorage.

### 3. SessionStorage

SessionStorage es similar a LocalStorage, pero los datos solo se almacenan durante la sesión de la página. Los datos se eliminan cuando se cierra la pestaña o ventana del navegador.

Se ha demostrado cómo guardar, cargar y mostrar datos utilizando SessionStorage, útil para mantener datos temporales durante una sesión de navegación.

#### Funciones Principales:
- `saveToSessionStorage(nombre, valor, imageUrl)`: Guarda datos en SessionStorage.
- `loadDataFromSessionStorage()`: Carga y muestra datos desde SessionStorage.

### 4. IndexedDB

IndexedDB es una base de datos NoSQL que permite almacenar grandes cantidades de datos estructurados en el navegador. Es útil para aplicaciones web que requieren almacenamiento avanzado y consultas complejas.

En este proyecto, se ha configurado IndexedDB para almacenar datos de manera más estructurada y realizar operaciones CRUD (crear, leer, actualizar, eliminar).

#### Funciones Principales:
- `saveToIndexedDB(nombre, valor, imageUrl)`: Guarda datos en IndexedDB.
- `loadDataFromIndexedDB()`: Carga y muestra datos desde IndexedDB.


