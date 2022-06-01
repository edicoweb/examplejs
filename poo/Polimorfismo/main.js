// ********COMMENT(polim)
class Comment{
    constructor({
        content,
        studentNameComent,
        studentRole = 'Estudiante',
    }){
        this.content = content;
        this.studentNameComent = studentNameComent;
        this.studentRole = studentRole;
        this.like = 0;
    }
    publicar(){
        console.log(this.studentNameComent + '('+this.studentRole+')');
        console.log(this.like + 'Likes');
        console.log(this.content);
    }
}

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

    publicarComentario(commentContent){
        const commets = new Comment({
            content: commentContent,
            studentNameComent: this.nameStudent,
        });
        commets.publicar();
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

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const commets = new Comment({
            content: commentContent,
            studentNameComent: this.nameStudent,
            studentRole: 'Profesor',
        });
        commets.publicar();
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

const freddy = new TeacherStudent({
    idStudent: 014362514,
    nameStudent: 'Freddy',
});


const jose = new PlanBasic({
    idStudent: 68523650,
    nameStudent: 'Jose Jaas',
    approvedCourses: [],
    learningPath: [],
});
