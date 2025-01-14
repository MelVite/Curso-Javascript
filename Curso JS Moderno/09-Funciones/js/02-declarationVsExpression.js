//Diferencia entre Function expression y Declaration
//Declaración de Función ( Function Declaration)
sumar();
function sumar () {
    console.log( 2 + 2);
}


// Expresión de Función ( Function Expression)
//sumar02(); //marca error debido al hoisting de JS
const sumar02 = function() {
    console.log( 3 + 3);
}

/**
 * El hoisting en JavaScript es un comportamiento de elevación o "subida" de las declaraciones de variables y funciones al principio de su contexto de ejecución (ya sea una función o el contexto global). Este comportamiento significa que tanto las variables como las funciones pueden ser referenciadas antes de ser definidas en el código, debido a que JavaScript las "eleva" al inicio del contexto de ejecución.

¿Qué se eleva?
Declaraciones de funciones: Las funciones son completamente elevadas, lo que significa que puedes invocar una función antes de su declaración en el código.

Declaraciones de variables: En el caso de las variables, solo se eleva la declaración, no su asignación. Esto genera un comportamiento en el que las variables pueden ser referenciadas antes de ser asignadas, pero su valor será undefined hasta que la asignación ocurra en el código.
 */
