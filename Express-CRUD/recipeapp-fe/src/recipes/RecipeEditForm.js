import React, { useState } from 'react'

export default function RecipeEditForm(props) {

  const [recipe, setRecipe] = useState(props.recipe)
const handleChange = (event) =>{
  const attrToChange = event.target.name
  const newRecipe = event.target.value

  const updateRecipe = {...recipe}
  updateRecipe[attrToChange] = newRecipe;
  console.log(updateRecipe)
  setRecipe(updateRecipe)
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(recipe);
  props.edit(recipe);
  event.target.reset();
  props.setIsEdit(false);
}
  

  return (
    <div>
        <h1>Edit Recipe</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={handleChange} value={recipe.title}></input>
            </div>
            <div>
                <label>Author</label>
                <input type="text" name="author" onChange={handleChange} value={recipe.author}></input>
            </div>
            <div>
                <label>Instructions</label>
                <input type="text" name="instructions" onChange={handleChange} value={recipe.instructions}></input>
            </div>
            <div>
                <label>Ingredients</label>
                <input type="text" name="ingredients" onChange={handleChange}></input>
                {/* <select></select> */}
            </div>
            <div>
                <input type="submit" value="Edit Recipe"></input>
            </div>
        </form>
    </div>
  )
}
