const miObjeto = {
    name:   'Edicoweb',
    age:    '25',
    country: 'Peruvian',
}

const {country, ...all} = miObjeto;
console.log(country, all);

//Result: eruvian {name: 'Edicoweb', age: '25'}


const obj = {
    name: 'Edilberto',
    age: '25',
}

const obj1 = {
    ...obj,
    country: 'Peruvian',
    hobby: 'Design',
}

console.log(obj1);

//Result:  {name: 'Edilberto', age: '25', country: 'Peruvian', hobby: 'Design'}

// ******** Finally

const greeting = () => {
    return new Promise((resolve, reject)=>{
        (true)
            ? resolve('Hello World')
            : reject('Test Error')
    });
};

greeting()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))

//Result: 
/*
    Hello World
    Finalizado
*/

// Para imprimir despues de 3000 ms

const greetings = () => {
    return new Promise((resolve, reject)=> {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new error('Test Error'))
    });
};

greetings()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado!!'))


/********************AÑO*****MES**********DIA */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-02-22');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
