const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');


router.post("/create",ProductController.creatProductPost);
router.get("/create",ProductController.creatProduct);
router.get("/:id",ProductController.getProduct);
router.get("/",ProductController.showProducts);




module.exports = router;