//Operadores de igualdad 
const num1 = 20;
const num2 = "20";
const num3 = 40;

//Igualdad 
console.log(num1 == num3); //arroja true o false 
console.log(num1 == num2); //arroja true porque coincide el valor

//Operador estricto
console.log(num1 === num2); //Este operador valida el valor y el tipo de dato por lo que arroja false.
console.log(num1 === parseInt(num2));
console.log(typeof num1);
console.log(typeof num2);

//Operador diferente 
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(num1 != num2);
console.log(num1 !== num2); //valida el valor y tipo de dato
console.log(num1 !== parseInt(num2));