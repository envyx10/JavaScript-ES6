document.addEventListener("DOMContentLoaded", function () {
    loadDataFromCookies(); 

    const form = document.getElementById("form1");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const valor = document.getElementById("valor").value;
        const imageFile = document.getElementById("image").files[0];
        const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "https://via.placeholder.com/50";

        saveCookie(nombre, valor, imageUrl);  
        loadDataFromCookies();  
    });

    // Función para guardar una cookie
    function saveCookie(nombre, valor, imageUrl) {
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 1);  
        const cookieExpiration = expirationDate.toUTCString();

        const cookieData = JSON.stringify({ nombre, valor, imageUrl });
        document.cookie = `${encodeURIComponent(nombre)}=${encodeURIComponent(cookieData)}; expires=${cookieExpiration}; path=/`;

        console.log("Cookie guardada:", document.cookie);
    }

    // Función para eliminar una cookie
    window.deleteCookie = function (nombre) {
        document.cookie = `${encodeURIComponent(nombre)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        console.log(`Cookie '${nombre}' eliminada`);
    }

    // Función para cargar datos desde las cookies
    function loadDataFromCookies() {
        const tbody = document.getElementById("cuerpo");
        tbody.innerHTML = "";  // Limpiar la tabla

        const cookies = document.cookie.split(";");

        cookies.forEach((cookie) => {
            const [nombre, valor] = cookie.split("=");
            if (nombre && valor) {
                try {
                    const data = JSON.parse(decodeURIComponent(valor));
                    const row = document.createElement("tr");
                    row.setAttribute("data-cookie-name", nombre.trim());  // Asignar un atributo único a la fila
                    row.innerHTML = `
                        <td contenteditable="true">${data.nombre}</td>
                        <td contenteditable="true">${data.valor}</td>
                        <td>
                            <img src="${data.imageUrl}" alt="${data.nombre}" style="width:50px;">
                            <input type="file" class="edit-image-input" style="display:none;">
                            <input type="text" class="edit-image-url" value="${data.imageUrl}" style="display:none;">
                        </td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="enableEdit('${nombre.trim()}')">Actualizar</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteRow('${nombre.trim()}')">Borrar</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                } catch (e) {
                    console.error("Error al parsear los datos de la cookie:", e);
                }
            }
        });
    }

    // Función para eliminar una fila y su cookie
    window.deleteRow = function (nombre) {
        deleteCookie(nombre);  

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

        // Mostrar los campos de la imagen como editables
        cells[2].querySelector(".edit-image-input").style.display = "inline-block";
        cells[2].querySelector(".edit-image-url").style.display = "inline-block";

        // Añadir un evento de actualización al botón
        const updateButton = row.querySelector("button");
        updateButton.innerText = "Guardar";
        updateButton.setAttribute("onclick", `updateCookie('${nombre}')`);
    };

    // Función para guardar los cambios en la cookie después de la edición
    window.updateCookie = function (nombre) {
        const row = document.querySelector(`tr[data-cookie-name='${nombre}']`);
        const cells = row.querySelectorAll("td");

        const newName = cells[0].innerText.trim();
        const newValue = cells[1].innerText.trim();

        // Comprobar si se ha cargado una imagen
        let newImageUrl = "";
        const fileInput = cells[2].querySelector(".edit-image-input");
        if (fileInput.files.length > 0) {
            newImageUrl = URL.createObjectURL(fileInput.files[0]);  
        } else {
            newImageUrl = cells[2].querySelector(".edit-image-url").value;  
        }

        // Eliminar la cookie antigua si el nombre ha cambiado
        if (newName !== nombre) {
            deleteCookie(nombre);
        }

        // Guardar la cookie con los nuevos valores
        saveCookie(newName, newValue, newImageUrl);

        // Recargar los datos de las cookies
        loadDataFromCookies();

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

    // Cargar datos desde la API 1
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
                saveCookie(uniqueName, character.species, imageUrl);
            })
            .catch((error) => console.error("Error al cargar datos de la API:", error));
    });

    // Cargar datos desde la API +5
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
                    saveCookie(uniqueName, character.species, imageUrl);
                });
            })
            .catch((error) => console.error("Error al cargar más datos de la API:", error));
    });
});
