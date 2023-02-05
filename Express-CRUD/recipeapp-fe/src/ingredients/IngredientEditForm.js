import React, { useState } from 'react'

export default function IngredientEditForm(props) {

  const [ingredient, setIngredient] = useState(props.ingredient)
const handleChange = (event) =>{
  const attrToChange = event.target.name
  const newIng = event.target.value

  const updateIngredient = {...ingredient}
  updateIngredient[attrToChange] = newIng
  console.log(updateIngredient)
  setIngredient(updateIngredient)
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(ingredient);
  props.editIng(ingredient);
  event.target.reset();
  props.setIsEdit(false);
}
  

  return (
    <div>
        <h1>Ingredient Edit</h1>

        <form onSubmit={handleSubmit}>
            <div>
                {/* <label>Name</label> */}
                <input type="text" name="name" onChange={handleChange} value={ingredient.name}></input>
            </div>
            <div>
                {/* <label>Origin</label> */}
                <input type="text" name="origin" onChange={handleChange} value={ingredient.origin}></input>
            </div>
            <div>
                <input type="submit" value="Edit Ingredient"></input>
            </div>
        </form>
    </div>
  )
}
