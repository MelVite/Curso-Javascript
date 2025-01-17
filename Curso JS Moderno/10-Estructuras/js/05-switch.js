//Switch se utiliza para evaluar multiples condiciones
const metodoPago = 'cheque';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break; //Una vez ejecutado el código del caso se pone break para salir del caso
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default: //Si nungún caso se cumple pasa a default
        console.log('Aun no has seleccionado un método de pago o método de pago no soportado');
        break;

}