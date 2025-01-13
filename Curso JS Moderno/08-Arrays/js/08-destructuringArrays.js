//Destructuring en objetos
const producto01 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const { nombre } = producto01;

console.log(nombre);

/**
 * Destructuring con Arreglos 
 * recordemos que se desestructura los elementos del array y se les asigna a una variable 
 */
const numeros02 = [ 10, 20, 30, 40, 50];

//El valor esta definido por la posición del elemento en el arreglo a diferencia que con los objetos que el valor esta definido por el nombre de la llave que contiene el valor.
const [primero] = numeros02;

console.log(primero);

//Dado a que el valor esta definido por la variable es necesario colocar todas las posiciones que debe recorrer el arreglo hasta obtener el elemento deseado.

//Para obtener el tercer elemento del arreglo: 
const [ , , tercero ] = numeros02;

console.log(tercero);

//primero, segundo y el resto en un arreglo por separado
const [ primero2, segundo, ...restante ] = numeros02;

console.log(restante);
