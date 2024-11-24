// Cola (Coches aleatorios)
export class Cola {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return this.items.join(', ');
    }
}

export const cola = new Cola();

const coches = ['Ford', 'Chevrolet', 'BMW', 'Tesla', 'Audi', 'Honda' , 'Kia' , 'Porche' , 'Toyota' , 'Mercedes' , 'Nissan'];

// Función para añadir coche aleatorio a la cola
export function addCola() {
    const cocheAleatorio = coches[Math.floor(Math.random() * coches.length)];
    cola.enqueue(cocheAleatorio);
}

// Función para actualizar la vista de la cola
export function actualizarVistaCola() {
    const listaElement = document.querySelector("#colaList");
    listaElement.innerHTML = cola.items.map(item => `<li class="list-group-item">${item}</li>`).join('');
}
