const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');


router.get("/",ProductController.showProducts);
router.get("/create",ProductController.creatProduct);
router.post("/create",ProductController.creatProductPost);

module.exports = router;