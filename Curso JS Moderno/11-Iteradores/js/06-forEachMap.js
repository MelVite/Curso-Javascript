//forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`)
})

//forEach esta diseñado para recorrer arreglos
const carrito06 = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

carrito06.forEach( producto => console.log(producto.nombre));

//Map
carrito06.map( producto => console.log(producto.nombre));

//La diferencia es que map crea un arreglo nuevo y forEach no