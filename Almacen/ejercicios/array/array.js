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
