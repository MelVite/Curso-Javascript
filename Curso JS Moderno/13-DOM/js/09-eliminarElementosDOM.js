
//Eliminar un elemento por si mismo con REMOVE
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

//Eliminar un elemento teniendo una referencia desde el padre
const navegacion9 = document.querySelector('.navegacion');
//Identificar que elemento queremos eliminar:
console.log(navegacion9.children);
//Se quiere eliminar registro 
navegacion9.removeChild( navegacion9.children[1] );