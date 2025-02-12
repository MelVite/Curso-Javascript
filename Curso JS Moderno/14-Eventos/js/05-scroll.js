/**Eventos al dar scroll con el mouse 
 * 
 */

window.addEventListener('scroll', () => {
    console.log('scrolling'); //scroll hacia abajo

    //scroll hacia arriba
    const scrollPX = window.scrollY;

    console.log(scrollPX);


    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if(ubicacion.top < 784 ) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da más scroll');
    }
})

/** getBoundingClientRect()
 * es un método de JavaScript que se utiliza para obtener las dimensiones de un elemento en la página web, incluyendo su posición relativa con respecto al área de visualización (viewport), así como el tamaño del mismo (alto, ancho). 
 * Esta información es muy útil cuando necesitas saber la ubicación exacta de un elemento en la pantalla o si quieres hacer un cálculo para animaciones, desplazamientos, o crear interacciones dinámicas basadas en la posición de los elementos.
 * Sintaxis: element.getBoundingClientRect();
 *      element es el nodo de DOM para el que deseas obtener el rectángulo de la caja delimitadora (bounding box).
 * 
 * ¿Qué devuelve getBoundingClientRect()?
 * El método devuelve un objeto DOMRect, que contiene las siguientes propiedades:
 *      - top: La distancia desde el borde superior del área de visualización hasta el borde superior del elemento.
 *      - right: La distancia desde el borde izquierdo del área de visualización hasta el borde derecho del elemento.
 *      - bottom: La distancia desde el borde superior del área de visualización hasta el borde inferior del elemento.
 *      -left: La distancia desde el borde izquierdo del área de visualización hasta el borde izquierdo del elemento.
 *      - width: El ancho del elemento.
 *      - height: La altura del elemento.
 */