/*
VARIABLES 
Var Son globales
*/
var producto = "Monitor de 24 pulgadas";
console.log(producto);
//Las variables se les puede reasignar su valor
producto = 'Monitor de 19 pulgadas'
console.log(producto);
//JS se trata de un lenguaje de tipo dinámico por lo que no se especifica el tipo de dato 
producto = 20;
console.log(producto);

//Se pueden inicializar sin valor y asignarlo después 
var disponible;
console.log(disponible);
//se le asigna un valor
disponible = true;
console.log(disponible);

//Inicializar múltiples variables 
var categoria = 'Computadora',
    marca = 'Marca Famosa',
    calificacion = 5;

//Las variables no pueden ser declaradas al inicio con numeros:
//var 99dias;
//var __usuarios; --> Esta es bien pero no es recomendable.

//Las clases se nombran con PascalCase