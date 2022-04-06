// Example 1
const greetStudent = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hello Student');
        } else{
            reject('Ups! Error Estudent');
        }
    });
};
greetStudent()
.then(Response => console.log(Response))
.catch(Error => console.log(Error))

// Example 2
const greetTeacher = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() => { resolve('Hello! Teacher')}, 3000);
        }else{
            const err = new Error('Ups! Error Teacher');
            reject(err);
        }
    });
};
greetTeacher()
.then(resolve => console.log(resolve))
.catch(err => console.error(err))


//execute two promise
Promise.all([greetStudent(), greetTeacher()])
.then(Response =>{
    console.log('Array of results', Response);
})
.catch(err => {
    console.error(err);
})

//Example 3 - async await
const greet = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=>resolve('Hello! '), 300)
        : reject(new Error('Ups! Error'))
    });
};

const newGreet = async() => {
    const someThing = await greet();
    console.log(someThing);
}

console.log('Before');
newGreet();
console.log('After');

const anotherFunction = async() =>{
    try{
        const something = await greet();
        console.log(something);
    }catch(error){
        console.error(error);
    }
}


console.log('Before 1 ');
newGreet();
console.log('After 1');