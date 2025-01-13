/**
 * Crear funciones en JS - Function expression y Function Declaration
 * Una función es un bloque de código que se define para REALIZAR UNA TAREA ESPECÍFICA o CALCULAR UN VALOR.
 * Pueden ser reutilizadas por lo que permiten tener un código más ordenado 
 * Existen dos formas de crear funciones en JS: 
 * 1. Declaración de función 
 * 2. Expresión de función
 */

//Declaración de Función ( Function Declaration)
function nombreFuncion (parametros) {
    //Cuerpo de la función 
}

function sumar () {
    console.log( 2 + 2);
}
//No imprime nada en consola ya que se debe mandar a llamar a la función 

//Llamado de la función 
sumar();


// Expresión de Función ( Function Expression), es como si la variable sea igual a una función 
const sumar2 = function() {
    console.log( 3 + 3);
}

sumar2();
