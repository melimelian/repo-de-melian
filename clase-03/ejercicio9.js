// ==============================================================================
// Ejercicio 9: Estadísticas de Descarga de Archivos
// Consigna: Escribir una función llamada `calcularEstadisticasDescarga` que reciba
// la cantidad de archivos a descargar y el tamaño promedio en MB de cada uno.
// Debe convertir los datos a Number, calcular el peso total en KB (1 MB = 1024 KB)
// y retornar un mensaje formateado.
// ==============================================================================

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    const cant = Number(cantArchivos);
    const tamano = Number(tamanoPromedioMB);

    const pesoTotalMB = cant * tamano;
    const pesoTotalKB = pesoTotalMB * 1024;

    return `Se descargarán ${cant} archivos con un peso total de ${pesoTotalKB} KB.`;
}
console.log(calcularEstadisticasDescarga("10", "1.5"))

// 📌 Feedback Docente (Profesor Axel):
// ¡Impecable uso de `const`, conversión explícita con `Number()` y Template Literals, Melian!
// Te comparto la variante de referencia:

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    const archivosNum = Number(cantArchivos);
    const tamanoNum = Number(tamanoPromedioMB);

    const totalKB = archivosNum * tamanoNum * 1024;
    const mensajeFinal = `Se descargarán ${archivosNum} archivos con un peso total de ${totalKB} KB.`;

    return mensajeFinal;
}

console.log(calcularEstadisticasDescarga(5, 2));
