// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos números
// (`edad` e `ingresos`). Si la edad es mayor o igual a 18 y los ingresos son mayores
// o iguales a 1000, retornar el 40% de los ingresos. De lo contrario, retornar 0.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
    // Tu código acá:
if (edad >= 18 && ingresos >= 1000) { return ingresos * 0.4; } 
  return 0;
    
}
console.log(calcularImpuestos(18, 1000)) 
console.log(calcularImpuestos(40, 10000)) 
console.log(calcularImpuestos(17, 5000))
console.log(calcularImpuestos(30, 500))
console.log(calcularImpuestos(19, 500))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente, Melian! Descarte directo y retorno condicional perfecto.
// Te comparto la variante de referencia utilizando variable de salida única:

function calcularImpuestos(edad, ingresos) {
    let impuesto = 0;

    if (edad >= 18 && ingresos >= 1000) {
        impuesto = ingresos * 0.40;
    }

    return impuesto;
}

console.log(calcularImpuestos(25, 2000)); // 800
