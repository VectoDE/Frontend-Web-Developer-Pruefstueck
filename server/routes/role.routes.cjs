const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller.cjs');
const authMiddleware = require('../middlewares/auth.middleware.cjs');
const roleMiddleware = require('../middlewares/role.middleware.cjs');

router.use(authMiddleware.authenticateToken);

router.post('/create', roleMiddleware.checkAdminRole, roleController.createRole);

router.get('/', roleMiddleware.checkAdminRole, roleController.getRoles);

router.put('/:id/update', roleMiddleware.checkAdminRole, roleController.editRole);

router.delete('/:id/delete', roleMiddleware.checkAdminRole, roleController.deleteRole);

module.exports = router;
