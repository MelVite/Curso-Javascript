//Buenas prácticas a la hora de evaluar Boolean 

//Al utilizar if no poner la comparación 
const autentificado = true;

//if(autentificado === true) {  --> Esto es mal 
if(autentificado){ //MEJOR
    console.log('Si puedes ver Netflix')
} else {
    console.log('No tienes acceso')
}

//OPERADOR TERNARIO se trata de un if simplificado 
console.log( autentificado ? 'Si esta autentificado' : 'No esta autentificado');