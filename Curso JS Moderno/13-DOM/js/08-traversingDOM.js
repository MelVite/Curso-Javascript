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
console.log(navegacion.childNodes);