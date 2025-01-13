//Eliminar elementos con Splice

const carrito2 = [];

//Definir un producto
const articulo = {
    nombre: 'Monitor de 32 Pulgadas',
    precio: 400
}

const articulo2 = {
    nombre: 'Celular',
    precio: 800
}

const articulo3 = {
    nombre: 'Teclado',
    precio: 50
}

const articulo4 = {
    nombre: 'Laptop',
    precio: 1000
}

const articulo5 = {
    nombre: 'Smartwatch',
    precio: 35
}

carrito2.push(articulo2);
carrito2.push(articulo);
carrito2.push(articulo4);
carrito2.push(articulo5);



carrito2.unshift(articulo3);

console.table(carrito2);

//Eliminar último elemento de un arreglo:
carrito2.pop();

console.table(carrito2);

//Eliminar del inicio del arreglo 
carrito2.shift();

console.table(carrito2);

//Eliminar elementos dentro de un arreglo que no sean del principio o final
carrito2.splice(1, 2);
//el primer parametro es la posición donde va a iniciar a cortar, el segundo es cuantos elementos quieres eliminar a partir de ese elemento

console.table(carrito2);
