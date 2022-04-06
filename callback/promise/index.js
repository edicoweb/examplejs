// Example 1
const greetStudent = () => {
    return new Promise((resolve, reject)=>{
        if(false){
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
        if(false){
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