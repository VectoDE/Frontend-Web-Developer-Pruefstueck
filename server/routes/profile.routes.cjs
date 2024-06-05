const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', profileController.createProfile);

router.get('/', profileController.getProfiles);

router.get('/:id', profileController.getProfileById);

router.put('/:id/update', profileController.updateProfile);

router.delete('/:id/delete', profileController.deleteProfile);

module.exports = router;
