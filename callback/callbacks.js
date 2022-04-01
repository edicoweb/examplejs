// Example 1
function first(callback){
    setTimeout(()=>{
        console.log('Soy el Primero');
        callback();
    }, 3000);
}
function second(){
    console.log('Soy el segundo');
}

first(second);

// Example 2
function sum(num1, num2){
    console.log(num1 + num2);
}

function calc(num1, num2, callback){
    callback(num1, num2);
}

calc(10,2,sum);