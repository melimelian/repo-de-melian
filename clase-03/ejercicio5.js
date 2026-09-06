// ==============================================================================
// Ejercicio 5: Sumar Rango de Números
// Consigna: Escribir una función llamada `sumarRango` que reciba dos números
// (inicio y fin) y retorne la suma de todos los números en ese rango (inclusive).
// ==============================================================================

function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumarRango(0, 10))
console.log(sumarRango(12, 14))
console.log(sumarRango(5, 5))

// 📌 Feedback Docente (Profesor Axel):
// ¡Impecable acumulador en el ciclo `for`, Melian!
// Te comparto la versión de referencia:

function sumarRango(numeroInicial, numeroFinal) {
    let sumaTotal = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        sumaTotal += i;
    }

    return sumaTotal;
}

console.log(sumarRango(1, 5)); // 15
