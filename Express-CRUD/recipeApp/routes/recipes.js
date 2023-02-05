const express = require('express');

const router = express.Router();

router.use(express.json());

let methodOverride = require("method-override");
const { use } = require('.');
router.use(methodOverride('_method'));
const isLoggedIn = require('../helper/isLoggedIn')
// Controller
const recipeCntrl = require("../controllers/recipes");

// Routes
router.get("/recipe/add", recipeCntrl.recipe_create_get);
router.post("/recipe/add", isLoggedIn, recipeCntrl.recipe_create_post);

router.get("/recipe/index", recipeCntrl.recipe_index_get);
router.get("/recipe/detail", recipeCntrl.recipe_show_get);

router.get("/recipe/edit", isLoggedIn, recipeCntrl.recipe_edit_get);
router.put("/recipe/update", isLoggedIn, recipeCntrl.recipe_update_put);

router.delete("/recipe/delete", isLoggedIn, recipeCntrl.recipe_delete_get);


module.exports = router;