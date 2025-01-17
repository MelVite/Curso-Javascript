//Operador && para que se cumplan 2 o más condiciones
const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Si eres usuario y puede pagar');
} else if (!usuario && !puedePagar) {
    console.log('No puedes comprar');
} else if (!usuario) { 
    console.log('Inicia sesión o crea una cuenta');
} else if (!puedePagar) { 
    console.log('Fondos Insificientes');
} else {
    console.log('No, no puede comprar');
}

//El orden es importante para este tipo de operadores