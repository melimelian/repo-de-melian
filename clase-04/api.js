/* ==========================================================================
   MÓDULO: api.js - Consumo de Servicios Externos (Fetch & Async/Await)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/**
 * TODO: Exportar una función asíncrona llamada descargarProductosTech()
 * que descargue en paralelo con Promise.all() las categorías:
 * - "https://dummyjson.com/products/category/smartphones"
 * - "https://dummyjson.com/products/category/laptops"
 * - "https://dummyjson.com/products/category/mobile-accessories"
 * y retorne un único array plano con todos los productos (.flatMap).
 */
export async function descargarProductosTech() {
    const urls = [
        "https://dummyjson.com/products/category/smartphones",
        "https://dummyjson.com/products/category/laptops",
        "https://dummyjson.com/products/category/mobile-accessories"
    ];

    const respuestas = await Promise.all(
        urls.map(url => fetch(url, { signal: AbortSignal.timeout(8000) }))
    );

    respuestas.forEach(res => {
        if (!res.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
    });

    const datos = await Promise.all(respuestas.map(res => res.json()));

    return datos.flatMap(dato => dato.products);
}
