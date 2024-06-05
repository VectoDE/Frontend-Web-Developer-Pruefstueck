const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', userController.createUser);

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.put('/:id/update', userController.updateUser);

router.delete('/:id/delete', userController.deleteUser);

module.exports = router;
