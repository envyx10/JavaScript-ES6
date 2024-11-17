let db;
let isDbReady = false;

// Abrir o crear la base de datos
const request = indexedDB.open("UsuariosDB", 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("usuarios", { keyPath: "username" });

    // Predefinir usuarios solo si la tienda de objetos está vacía
    const initialUsers = [
        { username: "Pablo", password: "1234" },
        { username: "Jota", password:  "1234" },
        { username: "Paco", password:  "1234" },
        { username: "Ruyi", password:  "1234" },
    ];

    // Verificar si la tienda de objetos está vacía antes de añadir
    const transaction = event.target.transaction; // Usar la transacción correcta
    const objectStoreCheck = transaction.objectStore("usuarios");
    const countRequest = objectStoreCheck.count();

    countRequest.onsuccess = function () {
        if (countRequest.result === 0) { // Si no hay usuarios
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

request.onsuccess = function (event) {
    db = event.target.result;
    isDbReady = true; // La base de datos está lista
    console.log("Base de datos abierta con éxito.");
};

request.onerror = function (event) {
    console.error("Error al abrir la base de datos:", event);
};

// Función para verificar credenciales
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
            window.location.href = "/main/main.html"; // Cambia la ruta según necesites
        } else {
            alert("El usuario o contraseña es incorrecto");
        }
    };

    request.onerror = function () {
        alert("Error al realizar la búsqueda del usuario.");
    };
}
