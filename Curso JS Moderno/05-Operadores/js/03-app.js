//Null y undefined son datos primitivos 
let numero;

console.log(numero); //arroja undefined porque la variable esta definida pero su valor no
console.log(typeof numero);


let numer2 = null;
console.log(numer2);
console.log(typeof numer2); //su tipo de dato es object 

//comparando un null con un undefined nos arroja true
console.log(numero == numer2);
//Es recomendable utilizar el operador estricto para tener una comporación correcta
console.log(numero === numer2);