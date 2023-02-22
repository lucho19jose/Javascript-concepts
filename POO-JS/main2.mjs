function videoPlay(id) {
  const urlSecreta = "video.joseluisb.cloud/" + id;
  console.log("Estamos reproduciendo desde la url" + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "video.joseluisb.cloud/" + id;
  console.log("Estamos pausando la url" + urlSecreta);
}

export class Classe {
  constructor({ name, videoId=0, comments=[]}) {
    this.name = name;
    this.videoId = videoId;
    this.comments = comments;
  }

  reproducir() {
    videoPlay(this.videoId);
  }

  pausar() {
    videoStop(this.videoId)
  }
}

class Course {
  constructor({name, classes = []}) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombre) {
    if (nuevoNombre === 'Curso Malito de Programación'){
      console.error("papu...nooo")
    }else {
      this._name = nuevoNombre;
    }
  }
}

const cursoProgramacionBasica = new Course({
  name: 'Curso de programación',
  classes: []
});

const cursodeDeepLearning = new Course({
  name: 'Curso de Deep learning',
  classes: []
});

const cursoAlgorithms = new Course({
  name: 'Curso de algoritmos',
  classes: []
});

const cursoDecalculus = new Course({
  name: 'Curso de Calculo',
  classes: []
});

const cursoDeBI = new Course({
  name: 'curso De BI',
  classes: []
});

const cursoDewebDevelopment = new Course({
  name: 'curso De HTML, CSS, JS, Vue',
  classes: []
});

class LearningPath {
  constructor({ name, courses=[] }){
    this.name = name;
    this.courses = courses
  }
}

const webdevelopmentPath = new LearningPath({
  name: 'web development',
  courses: [
    cursoProgramacionBasica,
    cursoAlgorithms, 
    cursoDewebDevelopment
    ]
});
const datasciencePath = new LearningPath({
  name: 'Data Science',
  courses: [
    cursoProgramacionBasica,
    cursoAlgorithms,
    cursoDecalculus,
    cursoDeBI
  ]
});
const DeepLearningPath = new LearningPath({
  name: 'Deep Learning',
  courses: [
    cursoProgramacionBasica,
    cursoAlgorithms,
    cursoDecalculus,
    cursodeDeepLearning
  ]
});


class Student {
  constructor({
    name,
    email,
    username, 
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username; 
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const jose = new Student({
  name:'JoseLuisB',
  username: 'joseluisb',
  email: 'joseluisb@gmail.com',
  twitter: 'joseluisb',
  learningPaths: [webdevelopmentPath, DeepLearningPath]
});


const miguelito = new Student({
  name:'miguelitodc',
  username: 'miguelitodc',
  email: 'miguelitodc@gmail.com',
  twitter: 'miguelitodc',
  learningPaths: [webdevelopmentPath, datasciencePath]
});