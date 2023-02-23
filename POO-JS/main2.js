class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }){
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + "(" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}


function videoPlay(id) {
  const urlSecreta = "video.joseluisb.cloud/" + id;
  console.log("Estamos reproduciendo desde la url" + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "video.joseluisb.cloud/" + id;
  console.log("Estamos pausando la url" + urlSecreta);
}

class Classe {
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
  constructor({name, classes = [], isFree=false, lang="spanish"}) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang
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
  classes: [],
  isFree: true,
  lang: 'spanish'
});

const cursodeDeepLearning = new Course({
  name: 'Curso de Deep learning',
  classes: [],
  lang: 'english',
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContentm,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student{
  constructor(props){
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, "+ this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}

class BasicStudent extends Student{
  constructor(props){
    super(props);
  }

  approveCourse(newCourse) {
    if(newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, "+ this.name + ", no puedes tomar cursos en ingles");
    }
  }
}

class ExpertStudent extends Student{
  constructor(props){
    super(props);
  }
  
  approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student{
  constructor(props){
    super(props);
  }
  
  approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor"
    })
  }

}

const jose = new FreeStudent({
  name:'JoseLuisB',
  username: 'joseluisb',
  email: 'joseluisb@gmail.com',
  twitter: 'joseluisb',
  learningPaths: [webdevelopmentPath, DeepLearningPath]
});


const miguelito = new BasicStudent({
  name:'miguelitodc',
  username: 'miguelitodc',
  email: 'miguelitodc@gmail.com',
  twitter: 'miguelitodc',
  learningPaths: [webdevelopmentPath, datasciencePath]
});

const fredda = new TeacherStudent({
  name:'fredadc',
  username: 'cvanderfreda',
  email: 'freddaier@gmail.com',
  twitter: 'freddaier',
  learningPaths: [webdevelopmentPath, datasciencePath]
});