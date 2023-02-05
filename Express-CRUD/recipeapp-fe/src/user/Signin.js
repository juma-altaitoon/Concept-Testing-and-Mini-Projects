import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"

export default function Signin(props) {

  const [newUser, setUser] = useState({})

  const changeHandler = (e) =>{
    const user = {...newUser}
    user[e.target.name] = e.target.value;
    console.log(user);
    setUser(user)
  }


  const loginHandler = (newUser) =>{
    props.login(newUser);
  }

  return (
    <div>
            <h1>SignIn</h1>
            
            <Container>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="emailAddress" onChange={changeHandler}></Form.Control>
                </Form.Group>
            
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Button variant = "primary" onClick={loginHandler}>Sign In</Button>
            </Container>

        </div>

  )
}
