const controller =  require('../controllers/hotel');
const {Router} = require('express');
const router = Router();

router.get('/', controller.getHotels);

module.exports = router;