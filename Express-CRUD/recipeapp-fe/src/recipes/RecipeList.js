import Axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import RecipeEditForm from './RecipeEditForm';
import RecipeCreateForm from './RecipeCreateForm';

export default function RecipeList(props) {

    const [recipes, setRecipes] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [currentRecipe, setCurrentRecipe]= useState({});
    


    useEffect(() => {
      loadRecipeList();
    }, [])
    
    const loadRecipeList =() =>{
        Axios.get("recipe/index")
        .then((res)=>{
            console.log(res.data.recipes)
            setRecipes(res.data.recipes)
        })
        .catch((err)=> {
            console.log("Error loading Recipes");
            console.log(err);
        })
    }
    

    const addRecipe = (recipe) =>{
        Axios.post("recipe/add", recipe)
        .then((res)=>{
            console.log("Successfully Created Recipe")
            loadRecipeList();
        })
        .catch(err =>{
            console.log ("Error Adding Recipe")
            console.log(err)
        })
    }

    const editView = (id) => {
        Axios.get(`recipe/edit?id=${id}`)
        .then( res =>{
            let recipe = res.data.recipe;
            setIsEdit(true);
            setCurrentRecipe(recipe);
        })
        .catch(err =>{
            console.log("Error Loading Recipe Info");
            console.log(err);
        })
       
    }
    
       const editRecipe = (recipe) => {
            Axios.put('recipe/update', recipe)
            .then(res =>{
                console.log("Successfully updated Recipe")
                // console.log(res)
                loadRecipeList()
            })
            .catch(err =>{
                console.log("Error Updating Recipe")
                console.log(err)
            })
       }
    
       const deleteRecipe = (id) => {
        Axios.delete(`recipe/delete?id=${id}`)
        .then((res)=>{
            console.log(res);
            console.log("Recipe Successfully Deleted")
            loadRecipeList();
            props.target.reset()
            setIsEdit(false)
        })
        .catch(err =>{
            console.log("Error Deleting Recipe")
            console.log(err)
        })
       }
 
    const allRecipes = recipes.map((recipe, index) =>(
        <tr key={index}>
            <Recipe {...recipe} edit={editView} delete={deleteRecipe} />
        </tr>
    )) 


  return (
    <div>
        <h1>Recipe List</h1>
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {allRecipes}
                </tbody>
            </table>
        </div>
        {(isEdit) ? (<RecipeEditForm key={currentRecipe.id} recipe={currentRecipe} edit={editRecipe} setIsEdit={setIsEdit}/>) :
        (<RecipeCreateForm addRecipe={addRecipe}/>)}
    </div>
  )
}
