bueno explicacion paso a paso de cada archivo.
---

# api.js:

//export async function descargarProductosTech() { 

-primero uso un EXPORT para que la variable pueda ser usada tambien en app.js, el async funciona para avisarle a JS esta funcion va a tener partes que tardan en responder, luego defino la funcion y su nombre.

//   const fetchSmartphones = fetch("https://dummyjson.com/products/category/smartphones");
    const fetchLaptops = fetch("https://dummyjson.com/products/category/laptops");
    const fetchAccesorios = fetch("https://dummyjson.com/products/category/mobile-accessories"); //
    
-aca uso un fetch para mandar el pedido a esa url

//const respuestas = await Promise.all([fetchSmartphones, fetchLaptops, fetchAccesorios]);

-uso un const respuestas para guardarlas ahi, y un AWAIT que espera a que todo termine.
promise.all junta a todos estos pedidos y esperarlos a la vez, no uno x uno

//const datosSmartphones = await respuestas[0].json();

-aca lo que hace respuestas0 es agarrar el primer elemento del array de respuestas. .json() = convierto esa respuesta cruda en datos usables.

//const datosLaptops = await respuestas[1].json();
//const datosAccesorios = await respuestas[2].json();

-lo mismo que la anterior linea de code, solo q como el array arranca en 0 aca debe de arrancar en 1 y 2

//const todasLasCategorias = [datosSmartphones, datosLaptops, datosAccesorios];

esto es un array nuevo metiendo los tres resultados que ya converti.

//const productos = todasLasCategorias.flatMap(categoria => categoria.products);

-aca .flatmap lo q hace es ingresar a cada objeto y entrar a los products que estan dentro de cada uno, y junta todo esto en una sola lista.
el resulado es una sola listo llamada productos con todo mezclado.

//return productos;

x ultimo el return para terminar q es como el resultado final



---

# ui.js:



                     
//export function crearTarjetaProductoHTML(producto, esFavorito) {

-uso un EXPORT para q esta funcion se pueda usar en app.js, defino la funcion con el nombre crearTarjetaProductoHTML y le paso dos parametros: producto y esFavorito.

//const { id, title, price, category, thumbnail, stock } = producto;

-aca uso destructuring, es sacar varios datos del objeto producto de una sola vez y ponerlos en variables sueltas, en vez de escribir producto.id, producto.title cada vez.

//let claseBoton = "";
//let iconoFavorito = "☆";

-uso LET xq estos valores van a ir cambiando. arranco claseBoton vacio y iconoFavorito con la estrella vacia como valor x defecto.

//if (esFavorito) {
// claseBoton = "en-favoritos";
// iconoFavorito = "⭐";
//}

-con el IF pregunto si esFavorito es true, y si lo es, cambio claseBoton a "en-favoritos" y el icono a la estrella llena.

//return // <article class="tarjeta-producto" data-id="${id}"> // ... // </article> //;

-el return me devuelve todo este bloque de html armado como un template literal (x eso las comillas invertidas), y adentro con ${ } voy metiendo las variables para q se reemplacen x su valor real.

//export function filtrarProductos(lista, textoBusqueda, categoria, favoritosIds = []) {

-otra funcion exportada, se llama filtrarProductos y recibe 4 parametros: la lista de productos, el texto q busco, la categoria, y favoritosIds q x defecto es un array vacio.

//return lista.filter(function (producto) {

-uso .filter() x recorrer la lista y quedarme solo con los productos q cumplan la condicion de abajo.

//const titulo = producto.title.toLowerCase();
//const texto = textoBusqueda.toLowerCase();
//const coincideTexto = titulo.includes(texto);

-paso el titulo del producto y el texto buscado a minusculas con .toLowerCase() (x q no importe si escribis mayuscula o minuscula), y con .includes() me fijo si el texto buscado esta contenido en el titulo.

//let coincideCategoria = false;

-arranco esta variable en false, y la voy cambiando segun las condiciones de abajo.

//if (categoria === "todas") {
// coincideCategoria = true;
//} else if (categoria === "favoritos") {
// coincideCategoria = favoritosIds.includes(producto.id);
//} else if (producto.category === categoria) {
// coincideCategoria = true;
//}

-aca pregunto: si la categoria elegida es "todas", coincideCategoria pasa a true directo. si es "favoritos", me fijo si el id del producto esta adentro del array favoritosIds. y si no es ninguna de esas dos, me fijo si la categoria del producto es igual a la categoria q estoy buscando.

//return coincideTexto && coincideCategoria;

-el && significa q tienen q cumplirse las dos cosas a la vez (q coincida el texto Y la categoria) para q el producto pase el filtro.

//export function calcularTotalCatalogo(lista) {

-otra funcion exportada, recibe la lista de productos y calcula el total.

//const total = lista.reduce(function (acumulado, producto) {
// return acumulado + producto.price;
//}, 0);

-uso .reduce() para recorrer la lista e ir acumulando todo en un solo valor final. arranca en 0 (el segundo parametro), y en cada vuelta le suma el price del producto actual al acumulado.

//return total;
//}

-x ultimo el return q devuelve ese total como resultado final de la funcion.


---

# app.js:

muy largo no llegue jejej
