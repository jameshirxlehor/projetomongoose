const Product = require('../models/Product');

module.exports = class ProductController{
    static async showProducts(req,res){
        const products = await Product.find().lean();
        res.render("products/all", { products });
    }

    static creatProduct(req,res){

        res.render("products/create");
        
    }



    static async creatProductPost(req,res){
        try{
        const name = req.body.name;
        const image = req.body.image;
        const price = req.body.price;
        const description = req.body.description;
    

        const product = new Product({name,image,price,description});
        await product.save();
        res.redirect("/");
        }catch(err){}
    }



    static async getProduct(req,res){
      try{
        const id = req.params.id;

        const product = await Product.findById(id).lean();

        res.render("products/product", { product });
      }catch(err){}
    }



    static async removeProduct(req,res){
      try{
        const id = req.params.id;

        await Product.deleteOne({_id: id}).lean();

        res.redirect("/");
      }catch(err){}
    }



    static async editProduct(req,res){
        try{
    
          const id = req.params.id;
    
          const product = await Product.findById(id).lean();
    
          res.render('products/edit',{ product });
          
    
        }catch(err){
    
        }
        
      }



      static async editProductPost(req,res){
        try{
    
          const id = req.body.id;
          const name = req.body.name;
          const image = req.body.image;
          const price = req.body.price;
          const description = req.body.description;
    
          const producteditado = {name,image,price,description};
            
          await Product.updateOne({_id: id},producteditado);

          res.redirect('/');
          
    
        }catch(err){
    
        }
    
      }

};