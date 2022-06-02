const huber = {
    name: 'Huber',
    age: 23,
    aprovedCourses: ['Curso1'],
    addCourse(newCourse){
        this.aprovedCourses.push(newCourse);
    }
};

Object.defineProperty(huber, 'lastName', { 
    value: 'marin', 
    enumerable: true,
    writable: true,  
    configurable: true,
});

// Si 'Enumerable' es 'false' no aparece en la lista con 'Object.keys(huber)' pero si en 'Object.getOwnPropertyDescriptors(huber)'
Object.defineProperty(huber, 'nationality', {
    value: 'Peruvian',
    enumerable: false,
    writable: true,
    configurable: true,
});

// Si 'Writable' es 'false' impide editar los valores de nuestra propiedad language 'huber.language = php' no cuncionará
Object.defineProperty(huber, 'language', {
    value: 'JavaSrcipt',
    enumerable: true,
    writable: false,
    configurable: true,
}); 

// si 'configurable' es 'false' impide eliminar propiedades de nuestros objetos
Object.defineProperty(huber, 'editor', {
    value: 'VisualCode',
    enumerable: true,
    writable: true,
    configurable: false,
});

Object.defineProperty(huber, 'level', {
    value: 'Basic',
    enumerable: false,
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(huber));