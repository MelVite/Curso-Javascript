//Solamente tiene dos valores true o false 
const boolean1 = true;
const boolean2 = false; 
const boolean3 = 'true';

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

//Comparación
console.log(boolean1 == boolean3);
//En este caso marca false porque un string nunca va a representar un boolean 

//Se pueden declarar boolean como objeto
const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);
