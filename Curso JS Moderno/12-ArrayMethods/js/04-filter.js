/**.filter()
 * se usa para filtrar los elementos de un array que cumplen con una condición específica. 
 * A diferencia de .map(), que transforma los elementos de un array, 
 * .filter() CREA un nuevo array que contiene solo aquellos elementos que pasan la prueba (la condición que le pases).
 */
const carrito4 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//traer todos los productos que cuesten arriba de 400
let resultado4;
resultado4 = carrito4.filter( producto => producto.precio > 400 );

//Todos los productos menores a 600
resultado4 = carrito4.filter( producto => producto.precio < 600 );

//Para quitar un elemento del carrito
resultado4 = carrito4.filter( producto => producto.nombre !== 'Audifonos' );

//Traer solo audifonos
resultado4 = carrito4.filter( producto => producto.nombre === 'Audifonos' );

console.log(resultado4);