const express = require('express');
const router = express.Router();
const socialClubController = require('../controllers/socialclub.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', socialClubController.createSocialClub);

router.get('/', socialClubController.getSocialClubs);

router.get('/:id', socialClubController.getSocialClubById);

router.put('/:id/update', socialClubController.updateSocialClub);

router.delete('/:id/delete', socialClubController.deleteSocialClub);

module.exports = router;
