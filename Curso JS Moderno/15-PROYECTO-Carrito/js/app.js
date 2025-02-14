//Variables
const carrito = document.querySelector('#carrito'); //Es const xq no se reasigna
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []; //Es let porque va a cambiar de valor

//Función que recopila los event Listeners 
cargarEvenListeners();
function cargarEvenListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)
}


//Funciones
function agregarCurso(evt) {
    //console.log('Presionando en cursos'); //Recomendado para visualizar si funciona
    evt.preventDefault();
    //console.log(evt.target.classList);//visualizar las clases
    if(evt.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = evt.target.parentElement.parentElement; //Se accede al div del contenido del curso
        leerDatosCurso(cursoSeleccionado);
    }
} 

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    //console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Agregar elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso]; //copia del carrito

    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra del carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//Elimina los cursos del tbody
function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    //Forma rápida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}