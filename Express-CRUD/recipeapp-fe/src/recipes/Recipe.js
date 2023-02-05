import React from 'react'

export default function Recipe(props) {
  return (
    <>
        <td>{props.title}</td>
        <td>{props.author}</td> 
        <td><button onClick={()=> props.edit(props._id)}>Edit</button></td>
        <td><button onClick={()=> props.delete(props._id)}>Delete</button></td> 
    </>
  )
}
