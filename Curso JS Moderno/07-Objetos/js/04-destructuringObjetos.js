const producto01 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    sucursal: 'Centro'
}

//Se pueden declarar llaves de un objeto como variables
const varNombre = producto01.nombre; //Forma antigua
console.log(varNombre);

//La desestructuración de objetos en JavaScript es una característica que permite extraer datos de objetos y asignarlos a variables individuales
const { nombre } = producto01;
console.log(nombre);

const { precio } = producto01;
console.log(precio);

//Se pueden extraer varias llaves al mimo tiempo
const { disponible, sucursal } = producto01;
console.log(disponible);
console.log(sucursal);

//Si llamas una llave que no existe arroja undefined ya que se crea la variable pero al no existir se encuentra indefinida.
const { piezas } = producto01;
console.log(piezas);