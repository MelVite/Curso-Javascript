/**
 * .includes() --> revisa si algo existe dentro de un arreglo, regresa un booleano
 */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo:
meses.forEach( mes => { //Para imprimir todos los elementos
    console.log(mes);
})

const resultado = meses.includes('Enero')
console.log(resultado);

/*En un arreglo de objetos se utiliza .some()
* se utiliza para verificar si al menos un elemento en un array cumple con una condición dada.
El método .some() toma una función de callback que se ejecuta sobre cada elemento del array
*/
const existe = carrito.some( (producto) => {
    return producto.nombre === 'Monitor'
})

//const = existe = carrito.some( producto => producto.nombre = 'Celular')

console.log(existe);

//En un arreglo tradicional con .some:
const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);