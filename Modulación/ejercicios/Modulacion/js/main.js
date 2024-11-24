import { pila, addPila, actualizarVistaPila } from './Pila.js';
import { cola, addCola, actualizarVistaCola } from './Cola.js';
import { lista, addLista, actualizarVistaLista } from './Lista.js';

// Pila (Cesta de Colada)
document.querySelector("#pilaPushButton").addEventListener("click", () => {
    addPila();
    actualizarVistaPila();
});

document.querySelector("#pilaPopButton").addEventListener("click", () => {
    pila.pop();
    actualizarVistaPila();
});

document.querySelector("#pilaPeekButton").addEventListener("click", () => {
    const lastItem = pila[pila.length - 1] || "No hay prendas";
    alert(`Última prenda: ${lastItem}`);
});

document.querySelector("#pilaClearButton").addEventListener("click", () => {
    pila.length = 0;
    actualizarVistaPila();
});

// Cola (Taller de Coches)
document.querySelector("#colaEnqueueButton").addEventListener("click", () => {
    addCola();
    actualizarVistaCola();
});

document.querySelector("#colaDequeueButton").addEventListener("click", () => {
    cola.dequeue();
    actualizarVistaCola();
});

document.querySelector("#colaFrontButton").addEventListener("click", () => {
    const firstItem = cola.front() || "No hay coches";
    alert(`Primer coche: ${firstItem}`);
});

document.querySelector("#colaClearButton").addEventListener("click", () => {
    cola.items = [];
    actualizarVistaCola();
});

// Lista (Organización de Tareas)
document.querySelector("#listaAddButton").addEventListener("click", () => {
    addLista();
    actualizarVistaLista();
});

document.querySelector("#listaRemoveButton").addEventListener("click", () => {
    lista.remove();
    actualizarVistaLista();
});

document.querySelector("#listaContainsButton").addEventListener("click", () => {
    const taskToSearch = prompt("¿Qué tarea buscas?");
    const contains = lista.getList().includes(taskToSearch);
    alert(contains ? `La tarea "${taskToSearch}" está en la lista.` : `La tarea "${taskToSearch}" no está en la lista.`);
});

document.querySelector("#listaClearButton").addEventListener("click", () => {
    lista.items = [];
    actualizarVistaLista();
});
