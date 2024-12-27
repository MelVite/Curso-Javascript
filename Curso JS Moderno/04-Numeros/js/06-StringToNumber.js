const number1 = "20";
const number2 = "20.2";
const number3 = "Uno";
const number4 = 50;

//Método typeof muestra el tipo de dato
console.log(typeof number1);

//Convertir un string a number entero: 
console.log(Number.parseInt(number1));

//Convertir un string a un numero con decimal:
console.log(Number.parseFloat(number2));

//No se pueden convertir numeros escritos a digitos, nos arroja una NAN
console.log(Number.parseInt(number3));

//Revisar si un número es entero o no con isInteger:
console.log(Number.isInteger(number4)); //Nos da verdadero o falso 
