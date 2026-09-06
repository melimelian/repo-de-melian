// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9",
// y `false` en caso contrario.
// ==============================================================================

function contrasenaValida(str) {
    // Tu código acá:
return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";
}
console.log(contrasenaValida("2Fj(jjbFsuj"))
console.log(contrasenaValida("eoZiugBf&g9"))
console.log(contrasenaValida("hola"))
console.log(contrasenaValida(""))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente resolución, Melian! La evaluación con el operador OR (||) retornando la expresión directa es impecable.
// Te comparto la variante con asignación a variable explicativa:

function contrasenaValida(str) {
    let esValida = str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";
    return esValida;
}

console.log(contrasenaValida("2Fj(jjbFsuj")); // true
