// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si el número es múltiplo de 3.
// - "buzz" si el número es múltiplo de 5.
// - "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// - Si no cumple ninguna, retornar el mismo número.
// ==============================================================================

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }
}
console.log(fizzBuzz(6))
console.log(fizzBuzz(20))
console.log(fizzBuzz(30))
console.log(fizzBuzz(8))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente, Melian! La evaluación del caso compuesto `3 y 5` al principio garantiza la precedencia de la condición.
// Te comparto la variante con retorno único:

function fizzBuzz(num) {
    let resultado = num;

    if (num % 3 === 0 && num % 5 === 0) {
        resultado = "fizzbuzz";
    } else if (num % 3 === 0) {
        resultado = "fizz";
    } else if (num % 5 === 0) {
        resultado = "buzz";
    }

    return resultado;
}

console.log(fizzBuzz(15)); // fizzbuzz
