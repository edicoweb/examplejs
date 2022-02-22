// Object.entries
const data = {
    frontend: 'Juan',
    backend: 'Elmer',
    design: 'Ross',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); //longitos del Array

/************************************ Convertir valores de obj en Array*/
//Object.values
const data = {
    frontend: 'Juan',
    backend: 'Elmer',
    design: 'Ross',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

/*********************************************** poner elementos antes/despues   */
const string = "Hello!";
console.log(string.padStart(8, 'hi'));
console.log(string.padEnd(8,'wo'));

//*************************Async & Await*********************************** */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//********************************************** */

const anothorFuntion = async () =>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anothorFuntion();