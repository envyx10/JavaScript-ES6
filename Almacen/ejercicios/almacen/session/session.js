document.addEventListener("DOMContentLoaded", function () {
    loadDataFromSessionStorage();  

    const form = document.getElementById("form1");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const valor = document.getElementById("valor").value;
        const imageFile = document.getElementById("image").files[0];
        const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "https://via.placeholder.com/50";

        saveToSessionStorage(nombre, valor, imageUrl);  
        loadDataFromSessionStorage();  
    });

    // Función para guardar en sessionStorage
    function saveToSessionStorage(nombre, valor, imageUrl) {
        const characterData = { nombre, valor, imageUrl };

        // Obtener los datos previos en sessionStorage
        let characters = JSON.parse(sessionStorage.getItem("characters")) || [];

        // Agregar el nuevo personaje
        characters.push(characterData);

        // Guardar los datos actualizados en sessionStorage
        sessionStorage.setItem("characters", JSON.stringify(characters));

        console.log("Datos guardados en sessionStorage:", characterData); // Mensaje de depuración
    }

    // Función para eliminar un personaje del sessionStorage
    window.deleteRow = function (index) {
        let characters = JSON.parse(sessionStorage.getItem("characters")) || [];

        // Eliminar el personaje del array
        characters.splice(index, 1);

        // Guardar los datos actualizados en sessionStorage
        sessionStorage.setItem("characters", JSON.stringify(characters));

        console.log(`Personaje eliminado: ${index}`); 

        loadDataFromSessionStorage();
    };

    // Función para cargar los datos desde sessionStorage
    function loadDataFromSessionStorage() {
        const tbody = document.getElementById("cuerpo");
        tbody.innerHTML = "";  

        const characters = JSON.parse(sessionStorage.getItem("characters")) || [];
        console.log("Datos cargados desde sessionStorage:", characters); 

        // Mostrar los personajes en la tabla
        characters.forEach(function (character, index) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td contenteditable="true">${character.nombre}</td>
                <td contenteditable="true">${character.valor}</td>
                <td>
                    <img src="${character.imageUrl}" alt="${character.nombre}" style="width:50px;">
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    // Cargar datos desde la API
    document.getElementById("loadAPI").addEventListener("click", function () {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                const character = data.results[Math.floor(Math.random() * data.results.length)];
                const uniqueName = character.name;
                const imageUrl = character.image;
                saveToSessionStorage(uniqueName, character.species, imageUrl);
                loadDataFromSessionStorage();  
            })
            .catch((error) => console.error("Error al cargar datos de la API:", error));
    });

    // Cargar más personajes desde la API
    document.getElementById("loadMoreAPI").addEventListener("click", function () {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                data.results.slice(0, 5).forEach((character) => {
                    saveToSessionStorage(character.name, character.species, character.image);
                });
                loadDataFromSessionStorage();  // Recargar la tabla con los nuevos personajes
            })
            .catch((error) => console.error("Error al cargar más datos de la API:", error));
    });
});
