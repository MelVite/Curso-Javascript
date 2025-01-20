/**ITERADOS
 * Se van a ejecutar HASTA que una condición se cumpla o deje de cumplirse 
 * 
 * For Loop 
 * Se ejecutan hasta que una condición se deja de cumplir
 * Consta de 3 partes:
 * 1. Inicializador (lugar donde inicia) --> let i = 0;
 * 2. Condición a revisar --> i < 10;
 * 3. Incremento --> i++
 */
for( let i = 0; i <= 10; i += 2 ){
    console.log(`Numero: ${i}`);
}

/**EJERCICIO
 * ¿En un For Loop cómo identificas los números pares y nones?
 */
for( let i = 0; i <= 20; i++) {
    if( i%2 == 0) {
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es inpar`);
    } 
}

//Resolucion profesor 
for( let i = 1; i <= 20; i++) {
    if( i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es INPAR`);
    } 
}

//Los For Loop son muy utiles con los arreglos 
const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.log( carrito.length);

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}