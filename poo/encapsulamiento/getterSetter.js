class customer{
    constructor({
        name,
        dni,
        products = [],
    })
    {
        this._name = name;
        this.dni = dni;
        this.products = products;
    }

    get name(){
       return this._name;
    }

    set editName(newName){
        if(newName === 'Hola'){
            console.error('Ups! Error');
        } else{
            this._name = newName;
        }
    }
}

const myCustomer = new customer({
    name: 'edy',
    dni: 71476252,
    products: ['Tv', 'Iphone'],
});

