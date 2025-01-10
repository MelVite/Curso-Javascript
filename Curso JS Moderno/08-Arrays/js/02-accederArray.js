//Para acceder a los elementos dentro del array
const num = [ 10, 20, 30, 40, 50, [1, 2, 3] ];

console.log(num);
//Visualizar arreglos con tabla 
console.table(num);

//Para acceder a un arreglo se hace por medio del indice del elemento 
console.log(num[2]);
console.log(num[0]);
//Si se coloca un indice que no esta dentro del array arroja undefined
console.log(num[8]); //Se crea la variable pero esta no esta definida
//Para acceder a un array dentro de otro
console.log(num[5][2]);
