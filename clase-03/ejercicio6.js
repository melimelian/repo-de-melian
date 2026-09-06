// ==============================================================================
// Ejercicio 6: Imprimir Elementos de un Arreglo
// Consigna: Escribir una función llamada `imprimirArreglo` que reciba un arreglo
// de elementos e imprima cada uno en la consola en una línea separada.
// ==============================================================================

function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}
imprimirArreglo([1, "Hola", 2, "Mundo"])

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente, Melian! Bucle `for` clásico bien implementado.
// Te comparto también la variante moderna con `for...of`:

function imprimirArreglo(arreglo) {
    for (const elemento of arreglo) {
        console.log(elemento);
    }
}

imprimirArreglo(["React Native", "Expo"]);
