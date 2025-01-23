/**.every()
 * se utiliza para comprobar si todos los elementos de un array cumplen con una condición especificada. 
 * Si todos los elementos cumplen la condición, el método devuelve true; si algún elemento no cumple la condición, devuelve false.
 * Este método es útil cuando necesitas verificar que todos los elementos de un array coinciden con ciertos criterios.
 */
const carrito6 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado6 = carrito6.every( producto => producto.precio < 500);

console.log(resultado6);