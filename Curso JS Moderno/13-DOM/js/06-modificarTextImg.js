
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Acceder al texto del encabezado h1, 3 formas:
console.log(encabezado.innerText); //Si en el CSS - visibility: hidden; no lo va a encontrar 
console.log(encabezado.textContent); //Si lo va a encontrar
console.log(encabezado.innerHTML); //Se trae el HTML

/**La diferencia entre .innerText y .textContent
 *  radica en cómo manejan el contenido de un elemento y las diferencias en el comportamiento de ambos al trabajar con el DOM:
 * .textContent:
    - Devuelve el texto contenido dentro de un elemento, incluyendo todo el texto (aunque esté oculto por estilos CSS).
    - No tiene en cuenta el estilo o la visibilidad del contenido; es decir, si un texto está oculto con display: none o visibility: hidden, aún será devuelto por .textContent.
    - No realiza ningún tipo de renderización. Es decir, solo te da el contenido tal como aparece en el DOM, sin tener en cuenta el formato visual del contenido.
 *.innerText:
    - Devuelve el texto visible dentro de un elemento, es decir, solo el contenido que se muestra en la página.
    - Respeta los estilos de visibilidad. Si el contenido está oculto (como con display: none), no lo incluirá.
    - Realiza una interpretación visual del texto, por lo que si hay saltos de línea, se los refleja, mientras que .textContent no se ve afectado por estos estilos de presentación.
 */


//Chainning o Encadenamiento
const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);