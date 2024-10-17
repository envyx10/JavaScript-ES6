
// Calculadora basica 
function calcular(){

    //* 1- Captación de datos
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = " ";

    if(operacion === "sumar"){
       let suma = n1 + n2;
       resultado += "<br>La suma es: " + suma;
    }

    if(operacion === "restar"){
        let resta = n1 - n2;
        resultado += "<br>La resta es: " + resta;
    }

    if(operacion === "multiplicar"){
        let multiplicacion = n1 * n2;
        resultado += "<br>La multiplicación es: " + multiplicacion;
    }

    if(operacion === "dividir"){
        let division = n1 / n2;
        resultado += "<br>La división es: " + division;
    }

    if(operacion === "factorial"){
        let factorial = calcularFactorialFuncion(n1);
        resultado += "<br>El factorial es: " + factorial;
    }

    if(operacion === "potencia"){
        let potencia = Math.pow(n1, n2);
        resultado += "<br>La potencia es: " + potencia;
    }

    if(operacion === "raiz-cuadrada"){
        let raizCuadrada = Math.sqrt(n1);
        resultado += "<br>La raíz cuadrada es: " + raizCuadrada;
    }

    if(operacion === "porcentaje"){
        let porcentaje = (n1 * n2) / 100;
        resultado += "<br>El porcentaje es: " + porcentaje;
    }

    if(operacion === "parte-entera"){
        let parteEntera = Math.trunc(n1);
        resultado += "<br>La parte entera es: " + parteEntera;
    }

    if(operacion === "parte-decimal"){
        let parteDecimal = n1 % 1;
        resultado += "<br>La parte decimal es: " + parteDecimal.toFixed(2);
    }

    //* 3- Mostrar resultado
    document.getElementById("resultado").innerHTML = resultado;

    return false; // Para que se pare el documento HTML, freno la simulación de envío SIEMPRE.
}


// Factorial
function calcularFactorialFuncion(num) {
    return (num <= 1) ? 1 : num * calcularFactorialFuncion(n - 1);
}

// Conversion de datos
function convertirBase() {
    const numeroBase = document.getElementById('numeroBase').value;
    const baseDestino = parseInt(document.getElementById('baseDestino').value);

    let numeroDecimal = parseInt(numeroBase, 10); 
    let resultado = numeroDecimal.toString(baseDestino).toUpperCase();

    document.getElementById('resultadoConversion').innerText = `Resultado: ${resultado}`;
    return false; 
}
