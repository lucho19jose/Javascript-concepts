class LearningPath {
  constructor({ name, courses=[] }){
    this.name = name;
    this.courses = courses
  }
}

const webdevelopmentPath = new LearningPath({
  name: 'web development',
  courses: ['introduction to software engineering', 'algoriths', 'data Structures', 'poo', 'Js']
});
const datasciencePath = new LearningPath({
  name: 'Data Science',
  courses: ['Introduction to Maths', 'Calculus', 'Introduction to Artificial Intelligence', 'BI', 'Hadoop']
});
const DeepLearningPath = new LearningPath({
  name: 'Deep Learning',
  courses: ['Introduction to Maths', 'Calculus', 'Introduction to Artificial Intelligence', 'Deep learning', 'Pythorch']
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