// Require Mongoose
const mongoose = require('mongoose');

// Schema
const recipeSchema = mongoose.Schema({
    title: String,
    author: String,
    instructions : String,
    ingredient: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }]
},{ timestamps : true})

// Model
const Recipe = mongoose.model("Recipe", recipeSchema);

// Export model to share it with controller
module.exports = Recipe;