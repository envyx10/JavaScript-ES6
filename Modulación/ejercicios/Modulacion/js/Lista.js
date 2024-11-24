// Lista (Tareas aleatorias)
export class Lista {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    remove() {
        return this.items.pop();
    }

    getList() {
        return this.items.join(', ');
    }
}

export const lista = new Lista();

const tareas = ['Comprar leche', 'Estudiar JavaScript', 'Llamar a un amigo', 'Ir al gimnasio', 'Leer un libro', 'Ver una serie', 'Hacer modulacion para J', 'Examen de PHP con Antonio', 'Examen de CSS con moises'];

// Función para añadir tarea aleatoria a la lista
export function addLista() {
    const tareaAleatoria = tareas[Math.floor(Math.random() * tareas.length)];
    lista.add(tareaAleatoria);
}

// Función para actualizar la vista de la lista
export function actualizarVistaLista() {
    const listaElement = document.querySelector("#listaList");
    listaElement.innerHTML = lista.items.map(item => `<li class="list-group-item">${item}</li>`).join('');
}
