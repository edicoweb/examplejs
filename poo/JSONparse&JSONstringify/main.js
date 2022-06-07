document.write('JSON.parse & JSON.stringify');

const student = {
    name: 'juan',
    age: 25,
    courses: {
        escuelaWeb: ['html', 'css'],
        escuelaNegocios: ['ceo', 'marketing'],
    },
};

const stringifiedComplexStudent = JSON.stringify(student);
const student3 = JSON.parse(stringifiedComplexStudent);