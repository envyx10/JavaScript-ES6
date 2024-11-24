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

Este proyecto es una demostración de cómo utilizar tres estructuras de datos básicas en JavaScript: **Pila**, **Cola** y **Lista**. La aplicación simula situaciones reales en las que estas estructuras de datos son útiles, como la gestión de prendas de ropa en una cesta de colada (pila), la gestión de coches en un taller (cola) y la organización de tareas pendientes (lista).

## Estructuras Implementadas

1. **Pila (Cesta de Colada)**:
   - Utiliza una **pila** para gestionar una lista de prendas de ropa.
   - Permite agregar prendas aleatorias a la pila y eliminar la última prenda añadida.

2. **Cola (Taller de Coches)**:
   - Utiliza una **cola** para gestionar coches en espera para ser atendidos en un taller.
   - Permite agregar coches aleatorios a la cola, y atender (eliminar) al primer coche en la fila.

3. **Lista (Organización de Tareas)**:
   - Utiliza una **lista** para gestionar tareas pendientes.
   - Permite agregar tareas aleatorias y eliminarlas, así como buscar tareas en la lista.

## Funcionalidades

- **Pila**: 
   - Añadir prenda aleatoria a la pila.
   - Sacar la última prenda añadida.
   - Ver la última prenda añadida.
   - Vaciar la cesta (pila).

- **Cola**:
   - Añadir coche aleatorio a la cola.
   - Atender al primer coche en la cola.
   - Ver el primer coche en la cola.
   - Vaciar el taller (cola).

- **Lista**:
   - Añadir tarea aleatoria a la lista.
   - Eliminar la última tarea de la lista.
   - Buscar una tarea específica en la lista.
   - Vaciar la lista de tareas.

## Instalación y Ejecución

### Requisitos

Para ejecutar este proyecto, necesitas un entorno de servidor que permita la ejecución de módulos ES6, como **VS Code Live Server** o un servidor web como **Apache**.

