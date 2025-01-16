//Realizar los métodos de propiedad con el reproductor de música 

const reproductorAW = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),

    pausar: () => console.log('pausando...'),

    borrar: id => console.log(`Borrando cancion ... ${id}`),

    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),

    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    //Set es una forma de agregar valores
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    //Get es una forma de obtener de vuelta dichos valores
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

//Con get y set no se necesita el (), se declaran como objetos:
reproductorAW.nuevaCancion = 'somebody to love'
reproductorAW.obtenerCancion;

reproductorAW.reproducir(4);
reproductorAW.pausar();
reproductorAW.borrar(30);
reproductorAW.crearPlaylist('Hip Hop');
reproductorAW.reproducirPlaylist('DPR');