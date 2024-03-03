const express = require('express'); 
const router = express.Router();    
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const { getProducts, postProducts, ProductbyId, ProductbyCategory, ProductbyBrand, updateproduct, deleteproduct } = require('./controller');

router.get('/get-all-products', getProducts)
router.get('/get-product-by-id/:_id', ProductbyId)
router.get('/get-product-by-category/:category', ProductbyCategory)
router.get('/get-product-by-brand/:brand', ProductbyBrand)
router.post('/add-products', postProducts)
router.put('/update-product', updateproduct);
router.delete('/delete-product', deleteproduct);

module.exports = router;
