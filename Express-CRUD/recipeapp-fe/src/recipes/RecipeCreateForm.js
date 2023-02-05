import React, { useState } from 'react'

export default function IngredientCreateForm(props) {

    const [newRecipe, setNewRecipe] = useState({});

    const handleChange = (event) => {
        const recipe = {...newRecipe}
        
        recipe[event.target.name] = event.target.value
        console.log(recipe)
        setNewRecipe(recipe);
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        props.addRecipe(newRecipe);
        event.target.reset();
    }


  return (
    <div>
        <h1>Recipe Create Form</h1>

        <form onSubmit={handleSubmit}>
            <div>
                {/* <label>Title</label> */}
                <input type="text" name="title" onChange={handleChange} placeholder="Title"></input>
            </div>
            <div>
                {/* <label>Author</label> */}
                <input type="text" name="author" onChange={handleChange} placeholder="Author"></input>
            </div>
            <div>
                {/* <label>Instructions</label> */}
                <input type="text" name="instructions" onChange={handleChange} placeholder="Instructions"></input>
            </div>
            <div>
                {/* <label>Ingredients</label> */}
                <input type="text" name="ingredient" multiple onChange={handleChange} placeholder="Ingredients"></input>
                {/* <select></select> */}
            </div>
            <div>
                <input type="submit" value="Add Recipe"></input>
            </div>
        </form>
    </div>
  )
}
