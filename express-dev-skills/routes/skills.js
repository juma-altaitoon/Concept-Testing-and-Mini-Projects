const express = require('express');

//  Invoking router functionality
const router = express.Router();

const skillsCtrl = require('../controllers/skills');

router.get('/skills', skillsCtrl.index);
router.get('/skills/:id', skillsCtrl.show);
router.get('/skills/skill', skillsCtrl.create_skill_get);

//  POST - Create
router.post('/skills/skill', skillsCtrl.create_skill_post);

//  GET - Edit
router.get('/skills/edit', skillsCtrl.create_skill_edit);

// POST - Update
router.post('/skills/update', skillsCtrl.update_skill_post);

// GET - DELETE
router.get('/skills/delete', skillsCtrl.delete_skill_get);



// Export router object so that we can use it in server.js file
module.exports = router;
