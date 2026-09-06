// ==============================================================================
// Desafío Semanal Obligatorio: Peaje Inteligente (Telepase)
// Consigna: Implementar la facturación automática de una cabina de peaje:
// 1. `calcularTarifa(tipoVehiculo, hora, esFeriado)`:
//    - Tarifas base: "moto": $150, "auto": $300, "camion": $600.
//    - Hora pico (8 a 10 y 17 a 19 inclusive): +30% recargo si NO es feriado.
//    - Aceptar mayúsculas/minúsculas. Si es inválido, advertir y retornar 0.
// 2. `simularFilaCabina(cantidadVehiculos)`:
//    - Simular aleatoriamente tipo, hora (0-23) y feriado (true/false).
//    - Mostrar detalle de cada intento en consola y retornar total recaudado.
// ==============================================================================

function calcularTarifa(tipoVehiculo, hora, esFeriado) {
    const tipo = tipoVehiculo.toLowerCase();

    const tarifasBase = {
        moto: 150,
        auto: 300,
        camion: 600
    };

    if (!(tipo in tarifasBase)) {
        console.log(`Advertencia: "${tipoVehiculo}" no es un tipo de vehículo válido.`);
        return 0;
    }

    let tarifa = tarifasBase[tipo];

    const esHoraPico = (hora >= 8 && hora <= 10) || (hora >= 17 && hora <= 19);

    if (esHoraPico && !esFeriado) {
        tarifa += tarifa * 0.3;
    }

    return tarifa;
}

function simularFilaCabina(cantidadVehiculos) {
    const tipos = ["moto", "auto", "camion"];
    let totalRecaudado = 0;

    for (let i = 1; i <= cantidadVehiculos; i++) {
        const tipoVehiculo = tipos[Math.floor(Math.random() * tipos.length)];
        const hora = Math.floor(Math.random() * 24);
        const esFeriado = Math.random() < 0.5;

        const tarifa = calcularTarifa(tipoVehiculo, hora, esFeriado);
        totalRecaudado += tarifa;

        console.log(`[Intento ${i}] Vehículo: ${tipoVehiculo} | Hora: ${hora} | Feriado: ${esFeriado} | Tarifa cobrada: $${tarifa}`);
    }

    return totalRecaudado;
}

console.log(calcularTarifa("moto", 9, false))
console.log(calcularTarifa("auto", 18, true))
console.log(calcularTarifa("camion", 12, false))
console.log(simularFilaCabina(5))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente solución, Melian! Destaco especialmente el uso del objeto literal `tarifasBase` para mapear las tarifas de forma limpia y extensible.
//
// 💡 Desafío de Modularización (Responsabilidad Única):
// En desarrollo profesional buscamos dividir problemas complejos en funciones auxiliares más pequeñas donde cada una hace una sola cosa bien. Mirá cómo quedaría desacoplando la lógica en funciones que cooperan:

// 1. Función que normaliza y valida el vehículo
function normalizarVehiculo(tipo) {
    let vehiculoLimpio = tipo.toLowerCase();
    let esValido = vehiculoLimpio === "moto" || vehiculoLimpio === "auto" || vehiculoLimpio === "camion";

    if (!esValido) {
        console.warn("Vehículo no válido: " + tipo);
        return null;
    }
    return vehiculoLimpio;
}

// 2. Función que determina la tarifa base
function obtenerTarifaBase(tipo) {
    let tarifa = 0;
    if (tipo === "moto") tarifa = 150;
    if (tipo === "auto") tarifa = 300;
    if (tipo === "camion") tarifa = 600;
    return tarifa;
}

// 3. Función que evalúa si corresponde recargo por hora pico
function esHorarioPico(hora, esFeriado) {
    let enRango = (hora >= 8 && hora <= 10) || (hora >= 17 && hora <= 19);
    return enRango && !esFeriado;
}

// 4. Función orquestadora principal
function calcularTarifaModular(tipoVehiculo, hora, esFeriado) {
    let vehiculo = normalizarVehiculo(tipoVehiculo);
    if (!vehiculo) return 0;

    let tarifaFinal = obtenerTarifaBase(vehiculo);

    if (esHorarioPico(hora, esFeriado)) {
        tarifaFinal = tarifaFinal * 1.30;
    }

    return tarifaFinal;
}

console.log(calcularTarifaModular("moto", 9, false)); // 195
console.log(calcularTarifaModular("auto", 18, true)); // 300
console.log(calcularTarifaModular("camion", 12, false)); // 600
