//copia superficial

const student = {
    name: 'juan',
    age: 23,
    email: 'juan@ketal.com',
    courses: {
        escuelaWeb: ['HTML', 'CSS'],
        EscuelaNegocios: ['Marketing', 'CEO'],
    },
}

const superStudent = {};

for(prop in student){
    superStudent[prop] = student[prop];
}
 
//**************  */
const obj4 = Object.create(student);