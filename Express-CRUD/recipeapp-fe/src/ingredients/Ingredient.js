import React from 'react'

export default function Ingredient(props) {
  return (
    <>
        <td>{props.name}</td>
        <td>{props.origin}</td>  
        <td><button onClick={()=> props.editView(props._id)}>Edit</button></td>
        <td><button onClick={()=> props.deleteIng(props._id)}>Delete</button></td>
    </>
  )
}
