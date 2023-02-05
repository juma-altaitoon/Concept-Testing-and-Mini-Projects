const express = require('express');

const router = express.Router();

router.use(express.json());

let methodOverride= require('method-override');
router.use(methodOverride('_method'))

const isLoggedIn =require('../helper/isLoggedIn')
// Controller
const ingredientCntrl = require('../controllers/ingredients');

// Routes
router.get("/ingredient/add",ingredientCntrl.ingredient_create_get);
router.post("/ingredient/add", isLoggedIn, ingredientCntrl.ingredient_create_post);

router.get("/ingredient/index", ingredientCntrl.ingredient_index_get);
router.get("/ingredient/detail", ingredientCntrl.ingredient_show_get);

router.get("/ingredient/edit", isLoggedIn, ingredientCntrl.ingredient_edit_get);
router.put("/ingredient/update", isLoggedIn, ingredientCntrl.ingredient_update_put);

router.delete("/ingredient/delete", isLoggedIn, ingredientCntrl.ingredient_delete_get);


// Export
module.exports = router;