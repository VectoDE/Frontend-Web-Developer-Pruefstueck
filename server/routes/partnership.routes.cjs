const express = require('express');
const router = express.Router();
const partnershipController = require('../controllers/partnership.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.use(authMiddleware.authenticateToken);

router.post('/create', upload.single('partnerBanner'), partnershipController.createPartnership);

router.get('/', partnershipController.getPartnerships);

router.get('/:id', partnershipController.getPartnershipById);

router.put('/:id/update', upload.single('partnerBanner'), partnershipController.updatePartnership);

router.delete('/:id/delete', partnershipController.deletePartnership);

module.exports = router;
