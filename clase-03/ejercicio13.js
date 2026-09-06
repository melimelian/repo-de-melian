// ==============================================================================
// Ejercicio 13: Gráficos de Consumo de Memoria en Consola
// Consigna: Escribir una función `dibujarGraficoConsumo` que reciba una cantidad de `pasos`.
// Retornar un string con una pirámide de bloques '█' usando ciclos anidados (o `.repeat()`).
// ==============================================================================

function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for (let fila = 1; fila <= pasos; fila++) {
        for (let columna = 1; columna <= fila; columna++) {
            grafico += "█";
        }
        grafico += "\n";
    }
    return grafico;
}
console.log(dibujarGraficoConsumo(3))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente manejo de bucles anidados, Melian!
// Te comparto también la versión más concisa utilizando `.repeat()`:

function dibujarGraficoConsumo(pasos) {
    let resultadoVisual = "";

    for (let i = 1; i <= pasos; i++) {
        resultadoVisual += "█".repeat(i) + "\n";
    }

    return resultadoVisual;
}

console.log(dibujarGraficoConsumo(4));
