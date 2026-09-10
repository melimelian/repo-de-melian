/* ==========================================================================
   TECHSTORE MÓVIL - ORQUESTADOR PRINCIPAL (PLANTILLA DE ALUMNOS)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

// ==========================================================================
// 📦 IMPORTACIÓN DE MÓDULOS ES6 (ES Modules)
// ==========================================================================
// TODO 1: Importar 'descargarProductosTech' desde './api.js'
// TODO 2: Importar 'obtenerFavoritos', 'alternarFavorito' y 'esProductoFavorito' desde './storage.js'
// TODO 3: Importar 'crearTarjetaProductoHTML', 'filtrarProductos' y 'calcularTotalCatalogo' desde './ui.js'
// (Escribí tus imports acá abajo):
import { descargarProductosTech } from "./api.js";
import { obtenerFavoritos, alternarFavorito, esProductoFavorito } from "./storage.js";
import { crearTarjetaProductoHTML, filtrarProductos, calcularTotalCatalogo } from "./ui.js";

// ==========================================================================
// 🎯 1. Selección de Nodos Principales del DOM
// ==========================================================================
// Revisá el archivo 'index.html' para identificar qué selector y método usar para cada constante:

// 🌓 Botón para alternar el Modo Oscuro y su icono de sol/luna:
const btnTema = document.querySelector("#btn-tema");
const iconoTema = document.querySelector("#icono-tema");

// ⭐ Botón del header para ver favoritos y el span del contador numérico:
const btnVerFavoritos = document.querySelector("#btn-ver-favoritos");
const badgeFavoritos = document.querySelector("#badge-favoritos-contador");

// 🔍 Campo de texto del buscador y colección con todos los botones de categorías:
const inputBuscador = document.querySelector("#input-buscador");
const botonesFiltro = document.querySelectorAll(".btn-filtro");

// 📱 Contenedor principal donde se inyectan las tarjetas de productos:
const contenedorCatalogo = document.querySelector("#contenedor-catalogo");

// 📊 Spans de la barra de métricas (total de productos visibles y valor total del catálogo):
const totalProductosSpan = document.querySelector("#total-productos-visibles");
const totalPrecioSpan = document.querySelector("#total-precio-acumulado");

// ⏳ Bloques de estado de la app (spinner de carga, mensaje de error, botón de reintento y caja de sin resultados):
const estadoLoading = document.querySelector("#estado-loading");
const estadoError = document.querySelector("#estado-error");
const btnReintentar = document.querySelector("#btn-reintentar");
const sinResultadosBox = document.querySelector("#sin-resultados");



// ==========================================================================
// 🧠 2. Estado Global en Memoria
// ==========================================================================
let productosEnMemoria = [];
let categoriaActual = "todas";

// ==========================================================================
// 🎨 3. Funciones de Renderizado y Actualización de UI
// ==========================================================================

function actualizarBadgeFavoritos() {
    const favoritos = obtenerFavoritos();
    badgeFavoritos.textContent = favoritos.length;
}

function aplicarFiltros() {
    const texto = inputBuscador.value;
    const favoritosIds = obtenerFavoritos();
    const productosFiltrados = filtrarProductos(productosEnMemoria, texto, categoriaActual, favoritosIds);

    totalProductosSpan.textContent = productosFiltrados.length;

    const total = calcularTotalCatalogo(productosFiltrados);
    totalPrecioSpan.textContent = `$${total.toFixed(2)}`;

    if (productosFiltrados.length === 0) {
        contenedorCatalogo.innerHTML = "";
        sinResultadosBox.classList.remove("oculto");
    } else {
        sinResultadosBox.classList.add("oculto");
        contenedorCatalogo.innerHTML = productosFiltrados
            .map(producto => crearTarjetaProductoHTML(producto, esProductoFavorito(producto.id)))
            .join("");
    }
}

function activarFiltroCategoria(categoria) {
    categoriaActual = categoria;

    botonesFiltro.forEach(boton => {
        if (boton.dataset.categoria === categoria) {
            boton.classList.add("activo");
        } else {
            boton.classList.remove("activo");
        }
    });

    aplicarFiltros();
}

// ==========================================================================
// 🌐 4. Carga Asíncrona del Catálogo (Consumo del módulo api.js)
// ==========================================================================
async function cargarCatalogo() {
    estadoLoading.classList.remove("oculto");
    estadoError.classList.add("oculto");
    contenedorCatalogo.innerHTML = "";

    try {
        productosEnMemoria = await descargarProductosTech();
        estadoLoading.classList.add("oculto");
        aplicarFiltros();
    } catch (error) {
        console.error(error);
        estadoLoading.classList.add("oculto");
        estadoError.classList.remove("oculto");
    }
}

// ==========================================================================
// 🖱️ 5. Manejo de Eventos (Event Listeners & Delegación)
// ==========================================================================

// 🌓 Modo Oscuro:
// Al hacer click en el botón de tema, alterná la clase 'dark-mode' en el body. Luego evaluá con un condicional: si el body tiene esa clase poné el icono de sol '☀️', sino poné el de luna '🌙'.
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        iconoTema.textContent = "☀️";
    } else {
        iconoTema.textContent = "🌙";
    }
});

// ⭐ Botón de Favoritos en el Header:
// Al hacer click, ejecutá 'activarFiltroCategoria' pasándole la categoría 'favoritos'.
btnVerFavoritos.addEventListener("click", () => {
    activarFiltroCategoria("favoritos");
});

// 🏷️ Botones de Categorías:
// Recorré la colección de botones y a cada uno agregale el evento 'click' para que llame a 'activarFiltroCategoria' pasándole su categoría correspondiente.
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        activarFiltroCategoria(boton.dataset.categoria);
    });
});

// 🔍 Búsqueda en tiempo real:
// Escuchá el evento 'input' en el buscador y llamá a 'aplicarFiltros()'.
inputBuscador.addEventListener("input", () => {
    aplicarFiltros();
});

// 🔄 Botón de Reintento:
// Al hacer click, volvé a llamar a 'cargarCatalogo()'.
btnReintentar.addEventListener("click", () => {
    cargarCatalogo();
});

// 🌟 Delegación de Favoritos en el Catálogo:
// 1. Al hacer click en cualquier parte del contenedor del catálogo, buscá con .closest() si se tocó el botón de favoritos de una tarjeta.
// 2. Si no se tocó el botón, cortá la función (return).
// 3. Si se tocó, obtené el id numérico del producto, ejecutá 'alternarFavorito(id)', actualizá el contador con 'actualizarBadgeFavoritos()' y volvé a llamar a 'aplicarFiltros()'.
contenedorCatalogo.addEventListener("click", (evento) => {
    const boton = evento.target.closest(".btn-fav-card");

    if (!boton) {
        return;
    }

    const id = Number(boton.dataset.id);
    alternarFavorito(id);
    actualizarBadgeFavoritos();
    aplicarFiltros();
});

// ==========================================================================
// 🚀 6. Inicialización de la Aplicación
// ==========================================================================
actualizarBadgeFavoritos();
cargarCatalogo();
