const mongoose = require('mongoose');

// Ingredient Schema
const ingredientSchema = mongoose.Schema({
    name: String,
    origin: String,
    recipe: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
})

// Ingredient  Model
const Ingredient = mongoose.model("Ingredient", ingredientSchema);

// Export model to share it with controller
module.exports = Ingredient;
