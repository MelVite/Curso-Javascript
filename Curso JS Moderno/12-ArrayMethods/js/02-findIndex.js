/** .findIndex()
 * se utiliza para encontrar el índice del PRIMER elemento en un array que cumple con una condición específica.
 * Si ningún elemento cumple con la condición, devuelve -1.
 */

const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito2 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Abril');

console.log(indice);

//Si ningún elemento cumple con la condición, devuelve -1.
const indice2 = meses.findIndex( mes => mes === 'Diciembre');

console.log(indice2);

//Encontrar el indice en un arreglo de objetos:
const indice3 = carrito2.findIndex( producto => producto.nombre === 'Tablet' );

console.log(indice3);
