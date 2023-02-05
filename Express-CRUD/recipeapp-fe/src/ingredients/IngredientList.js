import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Ingredient from './Ingredient';
import IngredientCreateForm from './IngredientCreateForm';
import IngredientEditForm from './IngredientEditForm';

export default function IngredientList(props) {
    
    const [ingredients, setIngredients] = useState([]);
    const [isEdit, setIsEdit] = useState(false)
    const [currentIngredient, setCurrentIngredient] = useState({})

    useEffect(() => {
     loadIngredientList(); 
    }, [])
   const loadIngredientList = () => {
    Axios.get("ingredient/index")
    .then((res) =>{
        // console.log(res);
        console.log(res.data.ingredient);
        setIngredients(res.data.ingredient);
    })
    .catch((err) =>{
        console.log("Error loading Ingredients");
        console.log(err);
    })
   }

//    const loadRecipes = (ingredient) =>{
//     if (ingredient.recipe){
//         const recipes= ingredient.recipe.map((rec, key)(
//            <td key={key}>
//                 <li>{rec.title}</li>
//             </td>
//         ))
//         return recipes;
//     }
//    }


   const addIng = (ingredient) =>{
    Axios.post('ingredient/add', ingredient, {
        headers:{
            "Authorization": "Bearer "+ localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log("Successfully Added Ingredient")
        loadIngredientList();
    })
    .catch((err)=>{
        console.log("Error Adding Ingredient")
        console.log(err)
    })
   }
   const editView = (id) => {
    Axios.get(`ingredient/edit?id=${id}`, {
        headers:{
            'Autherization': "Bearer "+ localStorage.getItem("token")
         }
    } )
    .then( res =>{
        console.log(res.data.ingredient)
        let ingredient = res.data.ingredient;
        setIsEdit(true);
        setCurrentIngredient(ingredient);
    })
    .catch(err =>{
        console.log("Error Loading Ingredient Info");
        console.log(err);
    })
   
}

   const editIng = (ingredient) => {
        Axios.put('ingredient/update', ingredient, {
            'Autherization': "Bearer "+ localStorage.getItem("token")
        })
        .then(res =>{
            console.log("Successfully updated Ingredients")
            // console.log(res)
            loadIngredientList()
        })
        .catch(err =>{
            console.log("Error Updating Ingredient")
            console.log(err)
        })
   }

   const deleteIng = (id) => {
    Axios.delete(`ingredient/delete?id=${id}`, {
        'Autherization': "Bearer "+ localStorage.getItem("token")
    })
    .then((res)=>{
        console.log(res);
        console.log("Ingredient Successfully Deleted")
        loadIngredientList();
        props.target.reset()
        setIsEdit(false)
    })
    .catch(err =>{
        console.log("Error Deleting Ingredient")
        console.log(err)
    })
   }


   const allIngredients = ingredients.map((ingredient, index)=>(
    <tr key={index}>
        <Ingredient {...ingredient} editView={editView} deleteIng={deleteIng}/>
        
    </tr>
   ))

  return (
    <div>
        <h1>Ingredient List</h1>
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Origin</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {allIngredients}
                </tbody>
            </table>
        </div>
        {(!isEdit) ?
        (<IngredientCreateForm addIng={addIng}></IngredientCreateForm>)
        :
        (<IngredientEditForm key={currentIngredient.id} ingredient={currentIngredient} editIng={editIng} setIsEdit={setIsEdit}></IngredientEditForm>)
        }
    </div>
  )
}
