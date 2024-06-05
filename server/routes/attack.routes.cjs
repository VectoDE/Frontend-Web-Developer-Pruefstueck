const express = require('express');
const router = express.Router();
const attackController = require('../controllers/attack.controller.cjs');

router.post('/', attackController.handleAttack);

module.exports = router;
