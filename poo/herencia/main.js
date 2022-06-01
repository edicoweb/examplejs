// ***********************************Cursos
class CoursesList{
    constructor({
        name,
        basic = false,
    }){
        this.name = name;
        this.basic = basic;
    }
}
const courseHTML = new CoursesList({
    name: 'Curso practico de HTML',
    basic: true,

});
const courseCSS = new CoursesList({
    name: 'Curso avanzado de CSS',
    basic: true,
});
const courseEnglish = new CoursesList({
    name: 'Curso de inglés',
});


// ***********************************Cursos
class LearningPath{
    constructor({
        name,
        courses = [],
        plan = 'planExperto',
    }){
        this.name = name;
        this.courses = courses;
        this.plan = plan;
    }
}
const escuelaWeb = new LearningPath({
    name: 'Escuela de desarrolo web',
    courses: [courseHTML, courseCSS],
    plan: "PlanBasic",
});

const escuelaIngles = new LearningPath({
    name: 'Escuela de Lenguas Extranjeras',
    courses: [courseEnglish],
});



class Student{
    constructor({
        idStudent,
        nameStudent,
        approvedCourses = [],
        learningPath = [],
    }){
        this.idStudent = idStudent;
        this._nameStudent = nameStudent;
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }

    get nameStudent(){
        return this._nameStudent;
    }   
    set nameStudent(newNameStudent){
        this._nameStudent = newNameStudent;
    }
}


// ***********************************Escuela
class PlanBasic extends Student{
    constructor(props){
        super(props);
    }
    addPath(newPath){
        if(newPath.plan !== 'planExperto'){
            this.learningPath.push(newPath);
        }
        else{
            console.warn(`Estimado ${this.nameStudent} la ruta pertenece al plan expert`);
        }
    }
}

class PlanExpert extends Student{
    constructor(props){
        super(props);
    }
    addPath(newPath){
        this.learningPath.push(newPath);
    }
}


// ***********************************Cursos

class StudentBasic extends Student{
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse){
        if(newCourse.basic){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn(`Estimado ${this.nameStudent} ud solo puede aprobar los cursos basicos`);
        }
    }
}

class StudentExpert extends Student{
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}



// ***********************************Estudiantes
const edy = new StudentBasic({
    idStudent: 72574210,
    nameStudent: 'edy',
    approvedCourses: [],
    learningPath: [
        escuelaWeb
    ],
});

const jose = new PlanBasic({
    idStudent: 68523650,
    nameStudent: 'Jose',
    approvedCourses: [],
    learningPath: [],
});
