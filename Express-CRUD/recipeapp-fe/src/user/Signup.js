import React, { useState } from 'react'
import {Container, Form, Button} from "react-bootstrap"

export default function Signup(props) {
  
    const [newUser, setNewUser] = useState({});

    const changeHandler =(e) =>{
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        setNewUser(user);
        console.log(user);
    }

    const registerHandler = () =>{
        props.register(newUser)
    }


    return (
        <div>
            <h1>Signup</h1>
            
            <Container>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" onChange={changeHandler}></Form.Control>
                </Form.Group>
            
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
                </Form.Group>
            
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="emailAddress" onChange={changeHandler}></Form.Control>
                </Form.Group>
            
            
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Button variant = "primary" onClick={registerHandler}>Register</Button>
            </Container>

        </div>
    )
}
