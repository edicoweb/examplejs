class customer {
    constructor({name, age, products, totalPrice}){
        this.name = name;
        this.age = age;
        this.products = products;
        this.totalPrice = totalPrice;
    }
    addProducts(newProduct){
        this.products.push(newProduct);
    }

    newPrice(price){
        this.totalPrice = price;
    }
}

const myClient = new customer({
    name: 'edy',
    age: 25,
    products: ['Computadora hp', 'Tv samsung'],
    totalPrice: 125,
});