let solicitudDB, bd, canalBD;
let nombreBD = "DATOS";  
let versionBD = 2;  
let tablaBD = "personajes"; 

// Abrir la base de datos
solicitudDB = indexedDB.open(nombreBD, versionBD);

solicitudDB.onerror = function (event) {
    console.error(`Error de IndexedDB: ${event.target.errorCode}`);
};

solicitudDB.onsuccess = function (event) {
    console.info('Conexión satisfactoria');
    bd = event.target.result;
    loadCharacterData(); 
};

solicitudDB.onupgradeneeded = function (event) {
    console.info('Base de datos creada o actualizada');
    bd = event.target.result;

    // Crear almacén de objetos para personajes
    let personajesStore = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true });
    personajesStore.createIndex("nombre", "nombre", { unique: false });
    personajesStore.createIndex("valor", "valor", { unique: false });
    personajesStore.createIndex("imagen", "imagen", { unique: false });

    console.info('Almacén de personajes creado o actualizado');
};

// Función para cargar los datos de personajes desde IndexedDB
function loadCharacterData() {
    const tbody = document.getElementById("cuerpo");
    tbody.innerHTML = ""; 

    const transaction = bd.transaction([tablaBD], "readonly");
    const store = transaction.objectStore(tablaBD);
    const request = store.getAll(); 

    request.onsuccess = function (event) {
        const data = event.target.result;
        if (data.length === 0) {
            console.log("No se encontraron personajes.");
        }

        // Mostrar los personajes en la tabla
        data.forEach(function (item) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.valor}</td>
                <td><img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: auto;"></td>
                <td><button class="btn btn-danger" onclick="deleteCharacter(${item.id})">Eliminar</button></td>
            `;
            tbody.appendChild(row);
        });
    };

    request.onerror = function (event) {
        console.error("Error al cargar los datos desde IndexedDB:", event.target.error);
    };
}

// Función para agregar un personaje a la base de datos
function addCharacterToDB(nombre, valor, imagen) {
    if (!bd) {
        console.error("La base de datos no está disponible.");
        return;
    }

    const transaction = bd.transaction([tablaBD], "readwrite");
    const store = transaction.objectStore(tablaBD);

    const newCharacter = {
        nombre: nombre,
        valor: valor,
        imagen: imagen
    };

    const request = store.add(newCharacter); 

    request.onsuccess = function () {
        console.info("Personaje guardado correctamente.");
        loadCharacterData(); 
    };

    request.onerror = function (event) {
        console.error("Error al guardar el personaje:", event.target.error);
    };
}

// Función para eliminar un personaje de la base de datos
function deleteCharacter(id) {
    const transaction = bd.transaction([tablaBD], "readwrite");
    const store = transaction.objectStore(tablaBD);
    const request = store.delete(id);

    request.onsuccess = function () {
        console.info("Personaje eliminado.");
        loadCharacterData(); 
    };

    request.onerror = function (event) {
        console.error("Error al eliminar el personaje:", event.target.error);
    };
}

// Cargar datos desde la API
document.getElementById("loadAPI").addEventListener("click", function () {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            const character = data.results[Math.floor(Math.random() * data.results.length)];
            const nombre = character.name;
            const valor = character.species; 
            const imagen = character.image;
            addCharacterToDB(nombre, valor, imagen);
        })
        .catch((error) => console.error("Error al cargar datos de la API:", error));
});

// Cargar más personajes desde la API
document.getElementById("loadMoreAPI").addEventListener("click", function () {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            data.results.slice(0, 5).forEach((character) => {
                const nombre = character.name;
                const valor = character.species;  
                const imagen = character.image;
                addCharacterToDB(nombre, valor, imagen);
            });
        })
        .catch((error) => console.error("Error al cargar más datos de la API:", error));
});


const nombreInput = document.getElementById("nombre");
const valorInput = document.getElementById("valor");
const imagenInput = document.getElementById("image");
const guardar = document.querySelector("#form1");

guardar.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const nombreValue = nombreInput.value;
    const valorValue = valorInput.value;
    const imagenFile = imagenInput.files[0];

    if (nombreValue && valorValue && imagenFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imagenDataURL = e.target.result;
            addCharacterToDB(nombreValue, valorValue, imagenDataURL);
        };
        reader.readAsDataURL(imagenFile);
    } else {
        console.warn("Por favor, complete todos los campos.");
    }
});
