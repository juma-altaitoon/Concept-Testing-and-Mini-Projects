import React, { useState } from 'react'

export default function IngredientCreateForm(props) {

    const [newIngredient, setNewIng] = useState({});

    const handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const ingredient = {...newIngredient}
        ingredient[attributeToChange] = newValue
        console.log(ingredient)
        setNewIng(ingredient);
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        props.addIng(newIngredient);
        event.target.reset();
    }


  return (
    <div>
        <h1>Ingredient Create Form</h1>

        <form onSubmit={handleSubmit}>
            <div>
                {/* <label>Name</label> */}
                <input type="text" name="name" onChange={handleChange} placeholder="Name..."></input>
            </div>
            <div>
                {/* <label>Origin</label> */}
                <input type="text" name="origin" onChange={handleChange} placeholder="Origin..."></input>
            </div>
            <div>
                <input type="submit" value="Add Ingredient"></input>
            </div>
        </form>
    </div>
  )
}
