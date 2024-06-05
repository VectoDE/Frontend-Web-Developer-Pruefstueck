const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referral.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', referralController.createReferral);

router.get('/', referralController.getReferrals);

router.get('/:id', referralController.getReferralById);

router.put('/:id/update', referralController.updateReferral);

router.delete('/:id/delete', referralController.deleteReferral);

module.exports = router;
