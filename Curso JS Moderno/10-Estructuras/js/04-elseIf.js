//Else if 
const dinero02 = 300;
const totalAPagar02 = 500;
const tarjeta = true;
const cheque = false;

if( dinero02 >= totalAPagar02) {
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Se paga con cheque');
} else if(tarjeta) {
    console.log('Se paga con tarjeta');
} else {
    console.log('Fondos insuficientes');
}

//else if se utiliza para una segunda condición especifica a cumplir