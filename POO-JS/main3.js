class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    if(this.integrantes.find(integrante => integrante.instrumento?.toLowerCase() == integranteNuevo.instrumento?.toLowerCase())){
      console.log("Ya existe un integrante con ese instrumento");
    }else {
      this.integrantes.push(integranteNuevo);
    }
  }
}

//Crear clase Integrante
class Integrante {
  constructor({ nombre, instrumento }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}


const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],    
  integrantes: [],
}
const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
banda.agregarIntegrante(new Integrante({ nombre: "José", instrumento: "Charango" }))

