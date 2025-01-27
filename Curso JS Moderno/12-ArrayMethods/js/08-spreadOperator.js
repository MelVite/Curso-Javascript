/**spread operator 
 *  representado por los tres puntos ...
 * se utiliza para expandir o "desempaquetar" elementos de un iterable (como un arreglo o un objeto) en lugares donde se esperan múltiples elementos o valores.
 * 
 */
const meses8 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito8 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Spread operator con arreglo de indices
const meses82 = [...meses8, 'Agosto']; //No modifica el arreglo original 

console.log(meses82);

console.log(meses8);

//Spread operator con objetos
const producto8 = { producto: 'Disco Duro', precio: 300};

const carrito82 = [...carrito8, producto8];

console.log(carrito82);