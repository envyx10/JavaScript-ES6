document.addEventListener("DOMContentLoaded", function () {
    loadDataFromLocalStorage();  

    const form = document.getElementById("form1");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const valor = document.getElementById("valor").value;
        const imageFile = document.getElementById("image").files[0];
        const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "https://via.placeholder.com/50";

        saveToLocalStorage(nombre, valor, imageUrl);  
        loadDataFromLocalStorage();  
    });

    // Función para guardar datos en localStorage
    function saveToLocalStorage(nombre, valor, imageUrl) {
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 1);  

        const cookieData = JSON.stringify({ nombre, valor, imageUrl, expiration: expirationDate });

        localStorage.setItem(nombre, cookieData);  
        console.log("Dato guardado en localStorage:", localStorage);
    }

    // Función para eliminar un elemento de localStorage
    window.deleteFromLocalStorage = function (nombre) {
        localStorage.removeItem(nombre);  
        console.log(`Dato '${nombre}' eliminado de localStorage`);
    }

    // Función para cargar datos desde localStorage
    function loadDataFromLocalStorage() {
        const tbody = document.getElementById("cuerpo");
        tbody.innerHTML = "";  

        for (let i = 0; i < localStorage.length; i++) {
            const nombre = localStorage.key(i);  
            const cookieData = localStorage.getItem(nombre);  

            if (cookieData) {
                try {
                    const data = JSON.parse(cookieData);
                    const row = document.createElement("tr");
                    row.setAttribute("data-cookie-name", nombre);  
                    row.innerHTML = `
                        <td contenteditable="true">${data.nombre}</td>
                        <td contenteditable="true">${data.valor}</td>
                        <td>
                            <img src="${data.imageUrl}" alt="${data.nombre}" style="width:50px;">
                            <input type="file" class="edit-image-input" style="display:none;">
                            <input type="text" class="edit-image-url" value="${data.imageUrl}" style="display:none;">
                        </td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="enableEdit('${nombre}')">Actualizar</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteRow('${nombre}')">Borrar</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                } catch (e) {
                    console.error("Error al parsear los datos de localStorage:", e);
                }
            }
        }
    }

    // Función para eliminar una fila y su dato en localStorage
    window.deleteRow = function (nombre) {
        deleteFromLocalStorage(nombre);  
        const row = document.querySelector(`tr[data-cookie-name='${nombre}']`);
        if (row) {
            row.remove();  
        }
    };

    // Función para habilitar la edición en una fila
    window.enableEdit = function (nombre) {
        const row = document.querySelector(`tr[data-cookie-name='${nombre}']`);
        const cells = row.querySelectorAll("td");

        // Marcar los campos como editables con borde azul
        cells[0].style.border = "2px solid blue";  
        cells[1].style.border = "2px solid blue";  
        cells[2].style.border = "2px solid blue";  

        // Cambiar el contenido editable de las celdas a 'true' solo para esta fila
        cells[0].setAttribute("contenteditable", "true");
        cells[1].setAttribute("contenteditable", "true");

      
        cells[2].querySelector(".edit-image-input").style.display = "inline-block";
        cells[2].querySelector(".edit-image-url").style.display = "inline-block";

      
        const updateButton = row.querySelector("button");
        updateButton.innerText = "Guardar";
        updateButton.setAttribute("onclick", `updateToLocalStorage('${nombre}')`);
    };

    // Función para guardar los cambios en localStorage después de la edición
    window.updateToLocalStorage = function (nombre) {
        const row = document.querySelector(`tr[data-cookie-name='${nombre}']`);
        const cells = row.querySelectorAll("td");

        const newName = cells[0].innerText.trim();
        const newValue = cells[1].innerText.trim();

        
        let newImageUrl = "";
        const fileInput = cells[2].querySelector(".edit-image-input");
        if (fileInput.files.length > 0) {
            newImageUrl = URL.createObjectURL(fileInput.files[0]);  
        } else {
            newImageUrl = cells[2].querySelector(".edit-image-url").value;  
        }

        // Eliminar el dato antiguo si el nombre ha cambiado
        if (newName !== nombre) {
            deleteFromLocalStorage(nombre);
        }

        // Guardar el dato con los nuevos valores en localStorage
        saveToLocalStorage(newName, newValue, newImageUrl);

        // Recargar los datos desde localStorage
        loadDataFromLocalStorage();

        // Restablecer el texto del botón a "Actualizar"
        const updateButton = row.querySelector("button");
        updateButton.innerText = "Actualizar";
        updateButton.setAttribute("onclick", `enableEdit('${newName}')`);

        // Quitar los bordes de edición
        cells[0].style.border = "none";
        cells[1].style.border = "none";
        cells[2].style.border = "none";

        // Deshabilitar la edición en las celdas
        cells[0].setAttribute("contenteditable", "false");
        cells[1].setAttribute("contenteditable", "false");

        // Ocultar los campos de imagen nuevamente
        cells[2].querySelector(".edit-image-input").style.display = "none";
        cells[2].querySelector(".edit-image-url").style.display = "none";
    };

    // Cargar datos desde la API
    document.getElementById("loadAPI").addEventListener("click", function () {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                const character = data.results[Math.floor(Math.random() * data.results.length)];
                const uniqueName = character.name;
                const imageUrl = character.image;
                const row = document.createElement("tr");
                row.setAttribute("data-cookie-name", uniqueName);
                row.innerHTML = `
                    <td contenteditable="true">${character.name}</td>
                    <td contenteditable="true">${character.species}</td>
                    <td>
                        <img src="${imageUrl}" alt="Imagen" width="50">
                        <input type="file" class="edit-image-input" style="display:none;">
                        <input type="text" class="edit-image-url" value="${imageUrl}" style="display:none;">
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="enableEdit('${uniqueName}')">Actualizar</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteRow('${uniqueName}')">Borrar</button>
                    </td>
                `;
                const tbody = document.getElementById("cuerpo");
                tbody.appendChild(row);
                saveToLocalStorage(uniqueName, character.species, imageUrl);
            })
            .catch((error) => console.error("Error al cargar datos de la API:", error));
    });

    document.getElementById("loadMoreAPI").addEventListener("click", function () {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                const tbody = document.getElementById("cuerpo");
                data.results.slice(0, 5).forEach((character) => {
                    const uniqueName = character.name;
                    const imageUrl = character.image;
                    const row = document.createElement("tr");
                    row.setAttribute("data-cookie-name", uniqueName);
                    row.innerHTML = `
                        <td contenteditable="true">${character.name}</td>
                        <td contenteditable="true">${character.species}</td>
                        <td>
                            <img src="${imageUrl}" alt="Imagen" width="50">
                            <input type="file" class="edit-image-input" style="display:none;">
                            <input type="text" class="edit-image-url" value="${imageUrl}" style="display:none;">
                        </td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="enableEdit('${uniqueName}')">Actualizar</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteRow('${uniqueName}')">Borrar</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                    saveToLocalStorage(uniqueName, character.species, imageUrl);
                });
            })
            .catch((error) => console.error("Error al cargar más datos de la API:", error));
    });
});
