/**.find()
 * se utiliza para encontrar el PRIMER elemento de un array que cumpla con una condición especificada. 
 * A diferencia de .filter(), que devuelve todos los elementos que cumplen la condición,
 *  .find() devuelve SOLO EL PRIMER ELEMENTO que cumple la condición y detiene la búsqueda en ese punto. 
 * Si no encuentra ningún elemento que cumpla la condición, devuelve undefined.
 * 
 */
const carrito5 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Con un forEach
let resultado5 = '';
carrito5.forEach((producto, index) => {
    if(producto.nombre === 'Tablet') {
        resultado5 = carrito5[index]
    }
});

console.log(resultado5)

//Con .find
const resultadoFind = carrito.find( producto => producto.nombre === 'Tablet' );

console.log(resultadoFind);