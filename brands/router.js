const app = require('express')
const router = app.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const { AddBrand, getAllBrands, brandByID, updateBrand, deleteBrand } = require('./controller')

router.post('/add-brand', AddBrand)
router.get('/brandbyid', brandByID)
router.get('/get-all-brands', getAllBrands)
router.put('/update-Brand', updateBrand)
router.delete('/delete-Brand', deleteBrand)

module.exports = router