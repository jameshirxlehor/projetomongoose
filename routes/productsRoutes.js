const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');

router.post("/edit",ProductController.editProductPost);

router.get("/",ProductController.showProducts);

router.get("/create",ProductController.creatProduct);

router.post("/create",ProductController.creatProductPost);

router.get("/:id",ProductController.getProduct);

router.post("/remove/:id",ProductController.removeProduct);

router.get("/edit/:id",ProductController.editProduct);


module.exports = router;