// ==============================================================================
// Ejercicio 11: Simulación de Diagnóstico de Red (Ping)
// Consigna: Escribir una función `simularReportePing` que reciba `intentosMaximos`.
// Recorrer los intentos del 1 al máximo. Si el intento es múltiplo de 5, emitir
// error crítico y cortar (`break`). Si es par "Exitoso", si es impar "Fallido".
// ==============================================================================

function simularReportePing(intentosMaximos) {
    for (let intento = 1; intento <= intentosMaximos; intento++) {
        if (intento % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${intento}`);
            break;
        } else if (intento % 2 === 0) {
            console.log(`Intento ${intento}: Exitoso`);
        } else {
            console.log(`Intento ${intento}: Fallido`);
        }
    }
}
simularReportePing(12)

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente, Melian! La interrupción con `break` en múltiplos de 5 y la evaluación del estado está perfecta.
// Te comparto la variante refactorizada con el operador ternario:

function simularReportePing(intentosMaximos) {
    for (let i = 1; i <= intentosMaximos; i++) {
        if (i % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${i}`);
            break;
        }

        const estado = (i % 2 === 0) ? "Exitoso" : "Fallido";
        console.log(`Intento ${i}: ${estado}`);
    }
}

simularReportePing(4);
