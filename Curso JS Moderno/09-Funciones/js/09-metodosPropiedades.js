//Añadir funciones en un Objeto

//MÉTODOS DE PROPIEDAD
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    //Ejercicio
    crearPlaylist: function(nombre) {
        console.log(`Se ha creado la playlist ${nombre}`);
        return nombre;
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`);
    }
}


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
//En un objeto reproducir es una propiedad pero como tiene una función se le conoce como MÉTODO DE PROPIEDAD

//Agregando una propiedad 
reproductor.borrar = function(id) {
    console.log(`Borrando cancion ... ${id}`);
    
}

reproductor.borrar(30);

//Ejercicio
reproductor.crearPlaylist('K-pop');
reproductor.reproducirPlaylist('K-pop');

//Ejercicio realizado por profesor 
const reproductorPRO = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando cancion ... ${id}`);
    }, 
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Heavy Metal');