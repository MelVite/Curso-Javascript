//Otro métodos para trabajar con objetos 
const producto12 = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300,
    disponible: true,
}

//keys --> retorna un arreglo con las llaves del objeto, se utiliza para saber si un objeto esta vacío
console.log( Object.keys( producto12) );

//values --> retorna un arreglo con los valores del objeto
console.log( Object.values( producto12) );

//entries --> retorna un array de arrays de cada llave-valor del objeto. Es una forma de convertir las propiedades de un objeto es una estructura iterable
console.log( Object.entries( producto12) );