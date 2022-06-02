const student = {
    name: 'edilberto',
    age: 25,
    email: 'soyedicoweb@ketal.pe',
    aprovedCourses: ['Course1', 'Course2'],
    addCourse(newCourse){
        this.aprovedCourses.push(newCourse);
    }
}

//nos ayuda que nuestra propiedad no sean borrado (hace que el 'configurable' de nuestro propiedades sea igual a 'false')
Object.seal(student);

//nos ayuda que nuestra propiedad no sea borrado ni editado (configurable: false y  writable: false)
Object.freeze(student);

console.log(Object.getOwnPropertyDescriptors(student));