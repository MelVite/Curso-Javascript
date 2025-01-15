//Parametros y argumentos en funciones
function sumar(a, b) { // a y b son parametros
    console.log(a + b);
}

sumar(2, 3); //2 y 3 son argumentos

sumar( 200, 184);
sumar( 124, 321);


function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}!`);
}

saludar('Melanie', 'Vite');

//Si solo le paso un valor:
saludar('Melanio'); //marca undefined el argumento no ingresado

//Si no le paso los argumentos
saludar(); //imprime undefined en ambos argumentos
//Esto pasa porque estamos mandando a llamar la variable pero esta no tiene ningún valor 

//Se recomienda mostrar valores por default 