// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de números
// y retorne un nuevo arreglo con cada elemento multiplicado por 2.
// ==============================================================================

function duplicar(arreglo) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(arreglo[i] * 2);
    }
    return nuevoArreglo;
}
console.log(duplicar([1, 2, 3]))
console.log(duplicar([]))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente, Melian! Respetaste la inmutabilidad creando un nuevo arreglo con `.push()`.
// Te comparto también la variante funcional con `.map()`:

function duplicar(arreglo) {
    let resultado = arreglo.map(num => num * 2);
    return resultado;
}

console.log(duplicar([5, 10])); // [10, 20]
