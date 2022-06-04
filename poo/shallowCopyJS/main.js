//copia superficial

const student = {
    name: 'juan',
    age: 23,
    email: 'juan@ketal.com',
}

const superStudent = {};

for(prop in student){
    superStudent[prop] = student[prop];
}