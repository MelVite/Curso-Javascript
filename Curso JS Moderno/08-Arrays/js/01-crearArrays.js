//Crear Arrays
//Los arreglos sirven para agrupar elementos que se recomienda sean del MISMO TIPO 
const numeros = [10, 20, 30];

//Segunda forma de crear arreglos no tan usada 
const meses = new Array('Enero', 'Febrero', 'Marzo');

console.log(numeros);
console.log(meses);

//Se pueden crear arreglos con un solo valor 
const canasta = [ 10 ];

//Un arreglo que contiene datos de todo tipo
const deTodo = ['Hola', 10, true, 'si', null, { nombre: 'Melanio', trabajo: 'Programador'}];

console.log(deTodo);

//JS no nos va a marcar error si tenemos un arreglo con distintos tipos de datos
//Se trata de una variable que contenga multiples elementos
//Se puede tener un arreglo dentro de otros arreglos