//.map para iterar un array y sus diferencias con forEach

/**MAP
 * El método .map() se utiliza para crear un nuevo arreglo con los resultados de aplicar una función a cada elemento de un arreglo existente
 * NO MODIFICA EL ARREGLO ORIGINAL
 * Crea un nuevo arreglo
 */

const carrito04 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televicion', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

carrito04.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}` );
})

carrito04.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}` );
})

//La diferencia entre forEach y map es que map crea un arreglo nuevo
const nuevoArreglo = carrito04.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

const nuevoArreglo2 = carrito04.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2); //imprime undefined ya que forEach no crea un nuevo arreglo