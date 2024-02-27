const Product = require('../models/Product');

module.exports = class ProductController{
    static async showProducts(req,res){
        const products = await Product.getProducts();
        res.render("products/all", { products });
    }

    static creatProduct(req,res){
        res.render("products/create");
    }



    static creatProductPost(req,res){
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        const product = new Product(name,price,description);
        product.save();
        res.redirect("/");
    }



};