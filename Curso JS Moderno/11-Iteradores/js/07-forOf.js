//Iterador for... of Itera sobre arreglos
const pendientes07 = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito07 = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

for(let pendiente of pendientes07) {
    console.log(pendiente);
}

for( let producto of carrito ) {
    console.log(producto.nombre);
    console.log(producto.precio);
}

/**El iterador for...of en JavaScript se utiliza para recorrer los elementos de objetos iterables, como arreglos, cadenas, mapas, conjuntos, entre otros.
 * for...of itera directamente sobre los valores de esos objetos iterables.
 * Sintaxis básica:
 * for (const item of iterable) {
    Bloque de código que se ejecuta por cada item
}
    iterable: es el objeto sobre el que se va a iterar (por ejemplo, un arreglo, cadena de texto, conjunto, mapa, etc.).
    item: es la variable que representa cada valor del iterable durante la iteración.
 */