const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller.cjs');

router.get('/', indexController.getIndexPage);

module.exports = router;
