const conn = require('../db/conn')

class Product {
  constructor(name, price, description) {
    this.name = name
    this.price = price
    this.description = description
  }

  save() { 
    const product = conn.db().collection('products').insertOne({ 
      name: this.name, //"name" é o nome do parametro do document e o "this.name" seria o parametro do objeto construido.
      price: this.price, //"price" é o nome do parametro do document e o "this.price" seria o parametro do objeto construido.
      description: this.description, //"description" é o nome do parametro do document e o "this.description" seria o parametro do objeto construido.
    });
    return product;
  }


}

module.exports = Product;