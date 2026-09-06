// ==============================================================================
// Ejercicio 7: Contador de Caracteres Específicos
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter, y retorne la cantidad de veces que aparece dicho carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeCaracteres("Hola Mundo", "o"))
console.log(numeroDeCaracteres("MMMMM", "m"))
console.log(numeroDeCaracteres("eeee", "e"))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente solución, Melian! Código limpio y directo.
// Te comparto la variante de referencia:

function numeroDeCaracteres(str, caracter) {
    let totalCoincidencias = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            totalCoincidencias++;
        }
    }

    return totalCoincidencias;
}

console.log(numeroDeCaracteres("Desarrollo", "o")); // 2
