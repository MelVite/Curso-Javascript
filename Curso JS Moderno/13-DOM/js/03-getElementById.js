//Seleccionar elemento por id
const formulario = document.getElementById('formulario');
console.log(formulario);

//Seleccionas algo que no existe 
const noExiste3 = document.getElementById('no-existe');
console.log(noExiste3);
//Retorna null

/*En buena practica que un id solo le pertenezca a UN solo ELEMENTO 
Cuando tengo dos elementos con el mismo ID se selecciona el primero 
Solo se retorna un elemento con getElementById
Estos elementos ya casi no son utilizador
*/