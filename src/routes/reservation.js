const controller  =  require('../controllers/reservation');
const {Router} = require('express');
const router = Router();

router.post('/create', controller.createReservation);
router.post('/check', controller.checkAvailability);
router.post('/calculate', controller.calculateRate);

module.exports = router;