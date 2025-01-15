//Ejemplo con múltiples funciones que se pasan valores
//Hay funciones que como resultado le asignan un valor a una variable que puede ser utilizada por otra función posteriormente 

function sumar(a, b) {
    return a + b;
}

sumar(2, 3);

//Al tener una función con return se debe tener una variable a la que se le asigna dicho valor 
const resultado = sumar(2, 3);

console.log(resultado);

//Ejemplo avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}
function calcularImpuesto(total) {
    return total * 1.16;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);
