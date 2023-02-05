// Dependencies
const express =require('express');

// Initialize Router functionality
const router = express.Router();

// Controller
const indexCtrl = require('../controllers/index');

// routes
router.get('/', indexCtrl.index_get);

// Export to files
module.exports =router;