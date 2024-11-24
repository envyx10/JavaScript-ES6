// Pila (Prendas aleatorias)
export const pila = [];

const prendas = ['Camiseta', 'Pantalón', 'Chaqueta', 'Zapatos', 'Sombrero', 'Jersey' , 'Sudadera'];

// Función para añadir prenda aleatoria a la pila
export function addPila() {
    const prendaAleatoria = prendas[Math.floor(Math.random() * prendas.length)];
    pila.push(prendaAleatoria);
}

// Función para actualizar la vista de la pila
export function actualizarVistaPila() {
    const listaElement = document.querySelector("#pilaList");
    listaElement.innerHTML = pila.map(item => `<li class="list-group-item">${item}</li>`).join('');
}
