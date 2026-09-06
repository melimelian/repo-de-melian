// ==============================================================================
// Ejercicio 10: Evaluación de Acceso a App Móvil
// Consigna: Escribir una función llamada `evaluarAccesoApp` que tome `edad`,
// `tienePermisoDocente` y `esInvitado`. Retornar `true` si no es invitado y
// cumple tener 18 o más años O tener permiso docente. En caso contrario, `false`.
// ==============================================================================

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }
    return edad >= 18 || tienePermisoDocente;
}
console.log(evaluarAccesoApp(16, true, false))
console.log(evaluarAccesoApp(20, false, true))

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente lógica con descarte temprano (guard clause), Melian!
// Te comparto la variante con retorno único:

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    let tieneAcceso = !esInvitado && (edad >= 18 || tienePermisoDocente);
    return tieneAcceso;
}

console.log(evaluarAccesoApp(18, false, false)); // true
