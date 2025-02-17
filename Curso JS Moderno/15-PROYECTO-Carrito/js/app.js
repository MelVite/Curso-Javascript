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

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // reseteamos el arreglo

        limpiarHTML(); // Eliminamos todo el HTML
    })
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

//Elimina un curso del carrito
function eliminarCurso( evt ) {
    
    if( evt.target.classList.contains('borrar-curso')){
        //console.log( evt.target.getAttribute('data-id')); //Para verificar que estamos obtenemos el id del curso que queremos eliminar
        const cursoId = evt.target.getAttribute('data-id');

        // Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId); //trae todos los articulos excepto el de cursoId

        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
        
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

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => { //map ira iterando sobre todos los elementos del carrito
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            } else {
                return curso; //retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementosal arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; //copia del carrito
    }

    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra del carrito de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
        
            <td>${titulo}</td>

            <td>${precio}</td>

            <td>${cantidad}</td>

            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
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