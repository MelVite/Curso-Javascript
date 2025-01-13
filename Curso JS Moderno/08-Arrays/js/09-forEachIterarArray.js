//forEach para iterar un array 

const carrito03 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televicion', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


for(let i = 0; i < carrito03.length; i++ ) {
    console.log( carrito03[i] );
}

//Para acceder al nombre 
for(let i = 0; i < carrito03.length; i++ ) {
    console.log( carrito03[i].nombre );
}

//Combinación con precio
for(let i = 0; i < carrito03.length; i++ ) {
    console.log( `${carrito03[i].nombre} - Precio: ${carrito03[i].precio}` );
}

//JS tiene sus propios metodos para iterar sobre un arreglo de manera más sencilla, estos se conocen como array methods
carrito03.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}` );
})

//Este ForEach es lo mismo que un for