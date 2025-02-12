/**¿Qué es el Event Bubbling? (burbujeo de eventos)
 * es un mecanismo que define cómo se propaga un evento desde el elemento objetivo hacia el documento. 
 * En otras palabras, cuando un evento es disparado en un elemento, primero se ejecuta la función de manejo del evento asociada a ese elemento, y luego el evento "burbujea" hacia los elementos contenedores, 
 * es decir, los elementos padres, hasta llegar al objeto raíz (generalmente el document o window).
 * Por ejemplo, si tienes un click en un botón dentro de un div, el evento se ejecuta en el botón primero, y luego "sube" (burbujea) al div y sigue propagándose hacia los elementos padres hasta el nivel más alto, a menos que se detenga su propagación.
 * 
 * ¿Cómo controlar el event bubbling?
 *  1. Detener la burbuja: Usando event.stopPropagation(), se puede evitar que el evento continúe propagandose hacia los elelemtos padres.
 *  2. Cambiar el orden de propagación: Si usas addEventListener, puedes pasar un tercer parámetro que especifica si el evento debe ser manejado en la fase de captura (antes que burbujee) o en la fase de bubujeo.
 * 
 * FASES DEL EVENTO:
 *  1. Fase de captura: El evento se propaga de arriba hacia abajo (del document a los elementos hijos).
 *  2. Fase de objetivo: El evento llega al elemento donde originalmente ocurrió.
 *  3. Fase de burbujeo: El evento comienza a burbujear de nuevo hacia arriba, pasando por los elementos padres.
 */

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', (evt) => {
    evt.stopImmediatePropagation() //Para detener la propagación del evento 
    console.log('click en card');
})

infoDiv.addEventListener('click', (evt) => {
    evt.stopImmediatePropagation()
    console.log('click en info');
})

tituloDiv.addEventListener('click', (evt) => {
    evt.stopImmediatePropagation()
    console.log('click en titulo');
})