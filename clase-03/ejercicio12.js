// ==============================================================================
// Ejercicio 12: Pipeline de Procesamiento de Compra Móvil
// Consigna: Escribir una función `procesarCompraMovil` que reciba `precioBase` y `descuentoPct`.
// Debe declarar internamente 3 funciones auxiliares (con sintaxis tradicional, expresión y flecha):
// 1. aplicarDescuento
// 2. sumarIva (21%)
// 3. redondear (2 decimales)
// Ejecutar el pipeline y retornar el precio final.
// ==============================================================================

function procesarCompraMovil(precioBase, descuentoPct) {
    function aplicarDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }

    const sumarIva = function (precio) {
        return precio + (precio * 0.21);
    };

    const redondear = (valor) => Number(valor.toFixed(2));

    const precioConDescuento = aplicarDescuento(precioBase, descuentoPct);
    const precioConIva = sumarIva(precioConDescuento);
    return redondear(precioConIva);
}
console.log(procesarCompraMovil(100, 10))

// 📌 Feedback Docente (Profesor Axel):
// ¡Impecable solución, Melian! La declaración de las 3 funciones auxiliares con distinta sintaxis quedó excelente.
// Te comparto la variante modularizada con funciones auxiliares delimitadas:

function procesarCompraMovilModular(precioBase, descuentoPct) {
    const aplicarDescuento = (precio, descuento) => precio - (precio * descuento / 100);
    const sumarIva = (precio) => precio * 1.21;
    const redondear = (valor) => Number(valor.toFixed(2));

    const descontado = aplicarDescuento(precioBase, descuentoPct);
    const conIva = sumarIva(descontado);
    const precioFinal = redondear(conIva);

    return precioFinal;
}

console.log(procesarCompraMovilModular(200, 15)); // 205.7
