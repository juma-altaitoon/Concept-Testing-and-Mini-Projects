const express = require('express');
const { index } = require('../controllers');

//  Invoking router functionality
const router = express.Router();
// Import index Controller
const indexCtrl = require('../controllers/index');
router.get('/', indexCtrl.helloWorld);


// Export router object so that we can use it in server.js file
module.exports = router;
