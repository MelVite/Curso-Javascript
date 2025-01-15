//Funciones flecha con Map y forEach
const carrito04 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televicion', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const nuevoArreglo = carrito04.map( producto => `${producto.nombre} - Precio: ${producto.precio}`
);

carrito04.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`) );

console.log(nuevoArreglo);