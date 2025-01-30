/**querySelectorAll
 * Es un método que se usa para seleccionar TODOS LOS ELEMENTOS del DOM que coinciden con un selector CSS determinado
 * Retorna una lista estática (no dinámica) de todos los elementos que cumplen con el criterio.
 * devuelve una "NodeList" (una lista de nodos) que puedes recorrer con métodos forEach
 * Utiliza una sintaxis CSS
 */
const card5 = document.querySelectorAll('.card');
console.log(card5);

//En el caso de tener la mala práctica de tener dos elementos con el mismo id, nos muestra el NodeList de dichos elementos
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

//Si un elemento no existe
const noExiste5 = document.querySelectorAll('no-existe');
console.log(noExiste5); //Retorna un NodeList vacío

