/**Cambiar el CSS con Javascript 
 * Se pueden agregar o quitar clases
 */

//Cambiar color de encabezado
const encabezado7 = document.querySelector('h1');

encabezado7.style.backgroundColor = 'red';

/**Una caracteristica de los estilos en JS es que a diferencia de CSS la notación de estilos no se separa con -:
 * Se hace de la siguiente manera: justifyContent
 * En firefox developer viene el listado de todas las propiedades de CSS que pueden ser modificadas 
 */


encabezado7.style.fontFamily = 'Arial';
encabezado7.style.textTransform = 'uppercase';

//El estilo debe ser definido en CSS por lo que se recomienda realizar cambias implementando o eliminando clases:
const card7 = document.querySelector('.card');
console.log(card7.classList);

//Para agregar una clase de utiliza el método add de classList
card7.classList.add('nueva-clase', 'segunda-clase');
console.log(card7.classList);

//Para eliminar una clase se utiliza remove
card7.classList.remove('card');
console.log(card7.classList);