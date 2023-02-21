const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprovados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],

  aprobarCurso(nuevoCurso){
    this.cursosAprovados.push(nuevoCurso);
  }
};

// Hacer que natalia apruebe otro curso

function Student(name, age, cursosAprovados) {
  this.name = name;
  this.age = age;
  this.cursosAprovados = cursosAprovados;
  /* this.aprobarCurso = function (curso){
    this.cursosAprovados.push(curso)
  } */
}

Student.prototype.aprobarCurso = function (curso) {
  this.cursosAprovados.push(curso);
}

const juanita = new Student("Juanita Alejandra", 18, ["html" ,"css", "js"]);

// Prototipos con la sintaxis de clases

class Student2 {
  constructor({ name, age, cursosAprovados = [], email }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.cursosAprovados = cursosAprovados;
  }

  aprobarCurso(curso) {
    this.cursosAprovados.push(curso);
  }
}

const miguelito = new Student2({
  name: 'miguelito',
  age: 19,
  email: 'miguelito@gmail.com',
  cursosAprovados: ["html", "css", "marketing"]
});
