const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');

const moment = require('moment');

exports.ingredient_create_get = (req,res)=>{
    res.render("ingredient/add");
}

exports.ingredient_create_post = (req,res)=>{
   console.log(req.body);
   let ingredient = new Ingredient(req.body);

    //Save ingredient
    ingredient.save()
    .then((ingredient)=>{
        // res.redirect('/ingredient/index');
        res.json({ingredient})
    })
    .catch((err)=>{
        console.log(err);
        res.send("Please try again later");
    });
} 

// GET -Ingredient Index
exports.ingredient_index_get = (req, res) => {
    Ingredient.find().populate('recipe')
    .then(ingredient => {
        // res.render("ingredient/index", {ingredient, moment})
        res.json({ingredient: ingredient})
    })
    .catch(err => {
        console.log(err);
    })
}

// GET - Ingredient by ID
exports.ingredient_show_get = (req, res) => {
    console.log(req.query.id+"--");
    // console.log(ingredient.recipe);
    Ingredient.findById(req.query.id).populate('recipe')
    .then(ingredient => {
        console.log (ingredient.recipe)
        res.render("ingredient/detail", {ingredient, moment});
    })
    .catch(err => {
        console.log(err);
    })
}

// GET - Load Ingredient Edit Form
exports.ingredient_edit_get = (req,res) => {
    Ingredient.findById(req.query.id)
    .then(ingredient => {
        // res.render("ingredient/edit", {ingredient});
        res.json({ingredient})
    })
    .catch(err => {
        console.log(err);
    })
}

// PUT - Ingredient Update
exports.ingredient_update_put = (req,res) => {
    console.log(req.body.id);
    Ingredient.findByIdAndUpdate(req.body._id, req.body, {new:true})
    .then((ingredient)=>{
        // res.redirect('/ingredient/index');
        res.json({ingredient})
    })
    .catch(err => {
        console.log(err)
    });
}

// DELETE - Ingredient
exports.ingredient_delete_get = (req, res)=>{
    console.log(req.query.id);
    Ingredient.findByIdAndDelete(req.query.id)
    .then((ingredient)=> {
        // res.redirect("/ingredient/index");
        res.json({ingredient})
    })
    .catch(err => {
        console.log(err);
    })
};