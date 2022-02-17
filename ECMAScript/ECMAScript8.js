const data = {
    frontend: 'Juan',
    backend: 'Elmer',
    design: 'Ross',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); //longitos del Array

/************************************ */

const data = {
    frontend: 'Juan',
    backend: 'Elmer',
    design: 'Ross',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


/*********************************************** */
const string = "Hello!";
console.log(string.padStart(8, 'hi'));
console.log(string.padEnd(8,'wo'));