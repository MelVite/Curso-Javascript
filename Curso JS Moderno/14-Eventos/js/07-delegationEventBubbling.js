/** Prevenir Event Bubbling con Delegation
 * Delegation (delegación de eventos) es un patrón de manejo de eventos en JavaScript que aprovecha el event bubbling (burbujeo de eventos) para manejar eventos en un elemento padre en lugar de agregar manejadores de eventos directamente a los elementos hijos.
 * En lugar de asignar un controlador de eventos a cada elemento individual, asignas un solo controlador de eventos al contenedor común (elemento padre) y luego usas event delegation para determinar cuál hijo disparó el evento. 
 * Esto es útil cuando tienes muchos elementos similares (como una lista dinámica) y te permite manejar eventos de manera más eficiente y fácil.
 * 
 * ¿Cómo funciona?
 * Cuando un evento ocurre en un hijo de un contenedor, el evento se propaga hacia el contenedor (debido al event bubbling). 
 * El contenedor puede detectar qué hijo disparó el evento, basándose en las propiedades del objeto del evento, como event.target.
 */

const cardDiv7 = document.querySelector('.card');

cardDiv7.addEventListener('click', (evt) => {
    console.log(evt.target.classList);

    //Delegation
    if(evt.target.classList.contains('titulo')) {
        console.log('Diste click en titulo')
    }

    if(evt.target.classList.contains('precio')) {
        console.log('Diste click en precio')
    }

    if(evt.target.classList.contains('card')) {
        console.log('Diste click en card')
    }
})