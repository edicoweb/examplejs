// ***************************CURSOS

class Courses{
    constructor({
        coursName, 
    }){
        this.coursName = coursName;
    }
}

const introduccionWeb = new Courses({
    coursName: 'Introducción a la Web',
});
const cursoHTML = new Courses({
    coursName: 'Curso definitivo de HTML',
});
const cursoCSS = new Courses({
    coursName: 'Curso definitivo de CSS',
});
const inglesBasico = new Courses({
    coursName: 'Curso Basico de Inglés',
});
const inglesIntermedio = new Courses({
    coursName: 'Curso Intermedio de Inglés',
});
const inglesAvanzado = new Courses({
    coursName: 'Curso Avanzado de Inglés',
});

// ********************************RUTA DE APRENDIZAJE

class LearningPath{
    constructor({
        school,
        courses = [],
    }){
        this.school = school;
        this.courses = courses;
    }
}

const desarrolloWeb = new LearningPath({
    school: 'Escuela de Desarrollo Web',
    courses: [
        introduccionWeb,
        cursoHTML,
        cursoCSS,
    ]
});

const ingles = new LearningPath({
    school: 'Escuela de Ingles',
    courses: [
        inglesBasico,
        inglesIntermedio,
        inglesAvanzado,
    ]
});

// *************************************ESTUDIANTE

class Student{
    constructor({
        dni,
        name,
        userName,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }){
        this.dni = dni;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.socialMedia = {
            twitter: twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
}

const edilberto = new Student({
    dni: 72174123,
    name: 'Edilberto',
    userName: 'edicoweb',
    email: 'edicoweb@ketaltegnologia.com',
    twitter: 'soyedicoweb',
    approvedCourses: [
        introduccionWeb,
        cursoHTML,
        inglesAvanzado
    ],
    learningPath: [
        desarrolloWeb,
        ingles,
    ],
});