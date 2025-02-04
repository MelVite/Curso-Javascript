/**Traversing the DOM / Recorriendo el DOM
 * se refiere al proceso de navegar y acceder a los diferentes elementos del DOM de una página web.
 * El DOM es una representación jerárquica de los elementos HTML de la página. 
 * Cuando "traversas" el DOM, básicamente te mueves a través de esta jerarquía para obtener o manipular elementos específicos.
 * 
 * Métodos comunes para atravesar el DOM: 
 * 1. Acceder a un nodo específico:
 *      - getElementById() 
 *      - getElementsByClassName()
 *      - getElementsByTagName()
 * 
 * 2. Acceder a nodos padres o hijos:
 *      - parentNode: Obtiene el nodo padre de un elemento.
 *      - childNodes: Obtiene todos los nodos hijos de un elemento.
 *      - firstChild / lastChild: Obtiene el primer o último nodo hijo.
 *      - nextSibling / previousSibling: Se mueve entre nodos hermanos.
 * 
 * 3. Acceder a nodos relacionados:
 *      - nextElementSibling: Accede al siguiente hermano que sea un elemento.
 *      - previousElementSibling: Accede al hermano anterior que sea un elemento.
 * 
 * 4. Navegar hacia elementos más profundos:
 *      - querySelector()
 *      - querySelectorAll()
 */

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Muestra unicamente los elementos HTML


//Dado a que tiene la estructura de un arreglo se pueden ingresar a sus elementos de ese mismo modo
console.log(navegacion.children[0]);
console.log(navegacion.children[1].nodeName); //Etiqueta del elemento
console.log(navegacion.children[1].nodeType); //Se trata de un entero positivo con los valores como ELEMENT_NODE, ATRIBUTE_NODE, etc.


//Seleccionar card para navegar por sus nodos 
const card8 = document.querySelector('.card');

card8.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM'

console.log(card8.children[1].children[1].textContent);

//Cambiar imagen con traversing 
card8.children[0].src = 'img/hacer3.jpg';
console.log(card8.children[0]);