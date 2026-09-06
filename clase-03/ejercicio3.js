// ==============================================================================
// Ejercicio 3: Cálculo del Índice de Masa Corporal (IMC / BMI)
// Consigna: Escribir una función llamada `bmi` que reciba peso (kg) y altura (m)
// y retorne la categoría según el valor del IMC.
// ==============================================================================

function bmi(peso, altura) {
    // Tu código acá:

    const indice = peso / (altura ** 2);
    if (indice < 18.5) {
        return "Bajo de peso";
    } else if (indice < 25) {
        return "Normal";
    } else if (indice < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75))
console.log(bmi(135, 1.7))

// 📌 Feedback Docente (Profesor Axel):
// ¡Impecable uso del operador de potencia `**`, Melian! Muy buena graduación de condicionales.
// Te dejo la variante con asignación a variable de retorno único:

function bmi(peso, altura) {
    let imc = peso / (altura ** 2);
    let diagnostico = "Obeso";

    if (imc < 18.5) {
        diagnostico = "Bajo de peso";
    } else if (imc < 25) {
        diagnostico = "Normal";
    } else if (imc < 30) {
        diagnostico = "Sobrepeso";
    }

    return diagnostico;
}

console.log(bmi(70, 1.75)); // Normal
