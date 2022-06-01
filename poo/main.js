const juan = {
    name: 'juanito',
    age: 26,
    aprovedCourses: ['curso1'],
    addCourse(newCourse){
        console.log("this holaaaaaaaaaa" , this);
        console.log("AprovarCurso" , this.aprovedCourses);

        this.aprovedCourses.push(newCourse);
    }
}

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan))

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, 'pruebaNasa', {
    value: 'Extraterrestres',
    writable: true,
    enumerable: true,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));