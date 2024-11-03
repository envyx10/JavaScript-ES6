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

# Proyecto de Autenticación de Usuarios con IndexedDB

Este proyecto implementa un sistema básico de autenticación de usuarios utilizando **IndexedDB**, una API de almacenamiento web que permite almacenar grandes cantidades de datos en el navegador.

## Descripción

El código permite abrir o crear una base de datos llamada `UsuariosDB` y gestionar un conjunto de usuarios predefinidos. Incluye funcionalidades para verificar las credenciales de los usuarios durante el proceso de inicio de sesión.

## Funcionamiento del Código
![image](https://github.com/user-attachments/assets/de13872b-0d58-43cc-80d4-85e0a0861c9c)

### 1. Apertura de la Base de Datos

El código comienza abriendo o creando la base de datos `UsuariosDB`. La versión inicial de la base de datos se establece en `1`.

```javascript
const request = indexedDB.open("UsuariosDB", 1);
```
### 2.Manejo del Evento onupgradeneeded
Cuando se crea la base de datos o se necesita actualizar, se activa el evento onupgradeneeded. En este evento, se crea una tienda de objetos llamada usuarios, que utiliza el campo username como clave principal. Se predefinen algunos usuarios solo si la tienda de objetos está vacía.

```javascript
request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("usuarios", { keyPath: "username" });

    // Predefinir usuarios solo si la tienda de objetos está vacía
    const initialUsers = [
        { username: "Pablo", password: "1234" },
        { username: "Jota", password: "1234" },
        { username: "Paco", password: "1234" },
        { username: "Ruyi", password: "1234" },
    ];

    // Verificar si la tienda de objetos está vacía antes de añadir
    const transaction = event.target.transaction;
    const objectStoreCheck = transaction.objectStore("usuarios");
    const countRequest = objectStoreCheck.count();

    countRequest.onsuccess = function () {
        if (countRequest.result === 0) {
            initialUsers.forEach(user => {
                objectStore.add(user).onsuccess = function() {
                    console.log(`Usuario ${user.username} añadido exitosamente.`);
                };
            });
        } else {
            console.log("Los usuarios ya están predefinidos en la base de datos.");
        }
    };

    countRequest.onerror = function() {
        console.error("Error al contar usuarios en la base de datos.");
    };
};

```
### 3. Manejo de la Apertura de la Base de Datos
Cuando la base de datos se abre con éxito, se establece isDbReady en true, indicando que la base de datos está lista para usarse.

```javascript
request.onsuccess = function (event) {
    db = event.target.result;
    isDbReady = true; // La base de datos está lista
    console.log("Base de datos abierta con éxito.");
};
```
### 4. Verificación de Credenciales
La función checkCredentials se encarga de verificar las credenciales proporcionadas por el usuario. Si la base de datos no está lista, se muestra un error. Luego, se realiza una transacción de solo lectura para obtener el usuario por su username.

```javascript
function checkCredentials(username, password) {
    if (!isDbReady) {
        console.error("La base de datos no está lista.");
        return;
    }

    const transaction = db.transaction(["usuarios"], "readonly");
    const objectStore = transaction.objectStore("usuarios");
    const request = objectStore.get(username);
    
    request.onsuccess = function (event) {
        const result = event.target.result;
        console.log("Resultado de la búsqueda:", result);
        if (result && result.password === password) {
            // Guardar estado de login
            localStorage.setItem("loggedIn", "true");
            window.location.href = "/ejercicios/main/main.html"; // Cambia la ruta según necesites
        } else {
            alert("El usuario o contraseña es incorrecto");
        }
    };

    request.onerror = function () {
        alert("Error al realizar la búsqueda del usuario.");
    };
}
```

### Cómo Ejecutar
Abre el archivo HTML que incluye este script en un navegador.
Asegúrate de que la consola del navegador esté abierta para ver los mensajes de depuración.
Usa las credenciales predefinidas para <b>iniciar sesión</b>:

- Usuario: Pablo, Contraseña: 1234
- Usuario: Jota, Contraseña: 1234
- Usuario: Paco, Contraseña: 1234
- Usuario: Ruyi, Contraseña: 1234

Este contenido está formateado correctamente para ser utilizado en un archivo `README.md`. Puedes copiarlo y pegarlo directamente en tu archivo.

**Interfaz de Generación de Matrices**
En esta nueva versión, se ha creado una interfaz para generar matrices aleatorias y realizar operaciones matemáticas sobre ellas.

## <b>Componentes Principales</b>
La interfaz incluye varios elementos interactivos que permiten al usuario definir el tamaño de las matrices y los valores mínimos y máximos:

- **Tamaño de la Matriz**: Campo de entrada para especificar el tamaño de las matrices a generar.
- **Valor Mínimo y Máximo**: Campos de entrada para definir los límites de los valores aleatorios generados.
- **Botones de Operaciones**:
  - **Generar Matrices**: Crea dos matrices aleatorias y las muestra.
  - **Sumar Matrices**: Suma las matrices generadas y muestra el resultado.
  - **Restar Matrices**: Resta las matrices generadas y muestra el resultado.
  - **Multiplicar Matrices**: Multiplica las matrices generadas y muestra el resultado.
  - **Pruebas Automáticas**: Ejecuta las operaciones de forma automática en intervalos definidos.

## <b>Cambios en el Código</b>
- Se ha añadido una función para generar matrices aleatorias de un tamaño especificado, llenas de valores en un rango definido.
- Las matrices generadas se muestran en el HTML utilizando un formato legible.
- Se han implementado funciones para sumar, restar y multiplicar matrices de forma eficiente.
- La interfaz permite al usuario iniciar pruebas automáticas que generan y suman matrices en intervalos de tiempo ajustables.

## <b>Explicación General del código - Generación y Manipulación de Matrices</b>
- **Generación de Matrices Aleatorias**: Se utiliza la función `generarMatrizAleatoria` para crear matrices de un tamaño específico con valores aleatorios dentro de un rango definido.
- **Mostrar Matrices**: La función `mostrarMatriz` permite presentar las matrices en el HTML, convirtiendo cada fila en una cadena de texto que se une por comas.
- **Operaciones de Matrices**: 
  - **Suma**: La función `sumarMatrices` toma dos matrices y devuelve una nueva que es la suma de ambas.
  - **Resta**: La función `restarMatrices` realiza la resta de las matrices.
  - **Multiplicación**: La función `multiplicarMatrices` implementa el algoritmo de multiplicación de matrices.

## <b>Explicación General del código - Pruebas Automáticas y Control de Velocidad</b>
- **Pruebas Automáticas**: La función `iniciarPruebasAutomaticas` ejecuta las pruebas de generación y suma de matrices en intervalos definidos por el usuario.
- **Control de Velocidad**: La función `cambiarVelocidadPrueba` permite ajustar la velocidad de las pruebas automáticas en función de los botones presionados por el usuario.

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const tamanoMatrizInput = document.getElementById("tamanoMatriz");
    const valorMinInput = document.getElementById("valorMin");
    const valorMaxInput = document.getElementById("valorMax");
    const btnGenerarMatrices = document.getElementById("btnGenerarMatrices");

    const btnAleatorio = document.getElementById("btnAleatorio");
    const btnParar = document.getElementById("btnParar");
    const btnRapido = document.getElementById("btnRapido");
    const btnLento = document.getElementById("btnLento");

    const btnSumarMatrices = document.getElementById("btnSumarMatrices");
    const btnRestarMatrices = document.getElementById("btnRestarMatrices");
    const btnMultiplicarMatrices = document.getElementById("btnMultiplicarMatrices");

    let matrizA = [];
    let matrizB = [];
    let matrizC = [];
    let intervaloPrueba;
    let velocidadPrueba = 1000;

    function generarMatrizAleatoria(tamano, minValor, maxValor) {
        let matriz = [];
        for (let i = 0; i < tamano; i++) {
            let fila = [];
            for (let j = 0; j < tamano; j++) {
                fila.push(Math.floor(Math.random() * (maxValor - minValor + 1)) + minValor);
            }
            matriz.push(fila);
        }
        return matriz;
    }

    function mostrarMatriz(matriz, idElemento) {
        const elemento = document.getElementById(idElemento);
        elemento.innerHTML = matriz.map(fila => fila.join(", ")).join("<br>");
    }

    function sumarMatrices(matrizA, matrizB) {
        let tamano = matrizA.length;
        let resultado = [];
        for (let i = 0; i < tamano; i++) {
            let fila = [];
            for (let j = 0; j < tamano; j++) {
                fila.push(matrizA[i][j] + matrizB[i][j]);
            }
            resultado.push(fila);
        }
        return resultado;
    }

    function restarMatrices(matrizA, matrizB) {
        let tamano = matrizA.length;
        let resultado = [];
        for (let i = 0; i < tamano; i++) {
            let fila = [];
            for (let j = 0; j < tamano; j++) {
                fila.push(matrizA[i][j] - matrizB[i][j]);
            }
            resultado.push(fila);
        }
        return resultado;
    }

    function multiplicarMatrices(matrizA, matrizB) {
        let tamano = matrizA.length;
        let resultado = Array.from({ length: tamano }, () => Array(tamano).fill(0));
        for (let i = 0; i < tamano; i++) {
            for (let j = 0; j < tamano; j++) {
                for (let k = 0; k < tamano; k++) {
                    resultado[i][j] += matrizA[i][k] * matrizB[k][j];
                }
            }
        }
        return resultado;
    }

    btnGenerarMatrices.addEventListener("click", function () {
        let tamano = parseInt(tamanoMatrizInput.value);
        let minValor = parseInt(valorMinInput.value);
        let maxValor = parseInt(valorMaxInput.value);
        matrizA = generarMatrizAleatoria(tamano, minValor, maxValor);
        matrizB = generarMatrizAleatoria(tamano, minValor, maxValor);
        mostrarMatriz(matrizA, "matrizA");
        mostrarMatriz(matrizB, "matrizB");
    });

    btnSumarMatrices.addEventListener("click", function () {
        matrizC = sumarMatrices(matrizA, matrizB);
        mostrarMatriz(matrizC, "matrizC");
    });

    btnRestarMatrices.addEventListener("click", function () {
        matrizC = restarMatrices(matrizA, matrizB);
        mostrarMatriz(matrizC, "matrizC");
    });

    btnMultiplicarMatrices.addEventListener("click", function () {
        matrizC = multiplicarMatrices(matrizA, matrizB);
        mostrarMatriz(matrizC, "matrizC");
    });

    btnAleatorio.addEventListener("click", function () {
        iniciarPruebasAutomaticas();
    });

    btnParar.addEventListener("click", function () {
        clearInterval(intervaloPrueba);
    });

    btnRapido.addEventListener("click", function () {
        cambiarVelocidadPrueba(500);
    });

    btnLento.addEventListener("click", function () {
        cambiarVelocidadPrueba(2000);
    });

    function iniciarPruebasAutomaticas() {
        clearInterval(intervaloPrueba);
        intervaloPrueba = setInterval(() => {
            let tamano = parseInt(tamanoMatrizInput.value);
            let minValor = parseInt(valorMinInput.value);
            let maxValor = parseInt(valorMaxInput.value);
            matrizA = generarMatrizAleatoria(tamano, minValor, maxValor);
            matrizB = generarMatrizAleatoria(tamano, minValor, maxValor);
            matrizC = sumarMatrices(matrizA, matrizB);
            mostrarMatriz(matrizC, "matrizC");
        }, velocidadPrueba);
    }

    function cambiarVelocidadPrueba(nuevaVelocidad) {
        velocidadPrueba = nuevaVelocidad;
        if (intervaloPrueba) {
            iniciarPruebasAutomaticas();
        }
    }
});
