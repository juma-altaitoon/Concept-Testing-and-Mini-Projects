// Require Model
const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');

// Require Moment
const moment = require('moment');


exports.recipe_create_get = (req, res) =>{
    // res.render("recipe/add");
    Ingredient.find()
    .then((ingredients) => {
        res.render("recipe/add", { ingredients })
    })
    .catch(err => {
        console.log(err);
    })
}

exports.recipe_create_post = (req, res) =>{
    console.log(req.body);
    let recipe = new Recipe(req.body);
    
    // save recipe
    recipe.save()
    .then((recipe)=>{
        // res.redirect("/recipe/index");
        // Reference Schema
        req.body.ingredient.forEach(ingredient => {
            Ingredient.findById(ingredient, (err, ingredient)=>{
                console.log(recipe);
                ingredient.recipe.push(recipe);
                ingredient.save();
            })
        });
        // res.redirect("/recipe/index");
        res.json({recipe})
    })
    .catch((err)=>{
        console.log(err);
        res.send("Please try again later");
    })
}
// GET - Recipes Index
exports.recipe_index_get = (req,res)=>{
    Recipe.find().populate('ingredient')
    .then(recipes => {
        // res.render("recipe/index", {recipes, moment})
        res.json({recipes:recipes})
    })
    .catch((err)=> {
        console.log(err);
    })
}

// GET - Recipe by Id
exports.recipe_show_get = (req,res)=>{
    console.log(req.query.id);
    Recipe.findById(req.query.id).populate('ingredient')
    .then(recipe => {
        res.render("recipe/detail", {recipe, moment})
    })
    .catch((err)=> {
        console.log(err);
    })
}

// Get - Load recipe edit form
exports.recipe_edit_get = (req,res)=> {
    Recipe.findById(req.query.id).populate('ingredient')
    .then(recipe =>{
        // res.render("recipe/edit", {recipe});
        res.json({recipe})
    })
    .catch(err => {
        console.log(err);
    })
}
 
// PUT - Recipe Update
exports.recipe_update_put = (req,res) => {
    console.log(req.body._id);
    Recipe.findByIdAndUpdate(req.body._id, req.body, {new:true})
    .then((recipe)=>{
        // res.redirect("/recipe/index");
        res.json({recipe})
    })
    .catch(err => {
        console.log(err)
    })
}
exports.recipe_delete_get = (req, res)=>{
    console.log(req.query.id);
    Recipe.findByIdAndDelete(req.query.id)
    .then((recipe)=>{
        // res.redirect("/recipe/index");
        res.json({recipe})
    })
    .catch(err => {
        console.log(err);
    })
};