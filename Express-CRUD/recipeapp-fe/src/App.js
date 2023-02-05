import React, { useEffect, useState } from 'react'
import IngredientList from './ingredients/IngredientList'
import RecipeList from './recipes/RecipeList'
import './index.css';
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './Home'
import Axios from 'axios'
import jwt_decode from "jwt-decode"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {Alert} from 'react-bootstrap'

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);

  useEffect(() =>{
    let token = localStorage.getItem("token");
    if(token != null){
      let user =jwt_decode(token);
      
      if(user){
        setIsAuth(true);
        setUser(user);
      }
      else if(!user){
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  
  },[])

  const registerHandler = (user) =>{
    Axios.post("auth/signup", user)
    .then(res =>{
      console.log(res)
    })
    .catch(err =>{
      console.log("Error Signing Up")
      console.log(err)
    })
  }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(res =>{
      console.log(res.data.token)
      let token = res.data.token;
      if(token != null){
        localStorage.setItem("token", token);
        let user = jwt_decode(token);
        console.log(user)
        setIsAuth(true);
        setUser(user);
        setMessage("User Logged In");
      }
    })
    .catch(err => {
      console.log("Login Error");
      console.log(err);
    })
  }

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    setMessage("Logged out Successfully")
  }

  const alert = message ? (
    <Alert variant='success' >{message}</Alert>
  ): null;

  return (
    
    <Router>
    <div>
      <Home/>
    {alert}
      <nav>{isAuth ? 
        (<div>
          <Link to="/"> Home </Link>&nbsp;
          <Link to="/ingredient"> Ingredient </Link>&nbsp;
          {/* <Link to="/recipe">Recipe</Link>&nbsp; */}
          <h5> {user.user.name}</h5>
          <Link to="/logout" onClick={logoutHandler}> LogOut</Link>&nbsp;
        </div>)
        :
        (<div>
          <Link to="/"> Home </Link>&nbsp;
          <Link to="/ingredient"> Ingredient </Link>&nbsp;
          {/* <Link to="/recipe">Recipe</Link>&nbsp; */}
          <Link to="/signup"> SignUp </Link>&nbsp;
          <Link to="/signin"> LogIn </Link>&nbsp;

        </div>)
        }
      </nav>
      <div>
        <Routes>
          <Route to="/" element={<Home/>}></Route>
          <Route path="/ingredient" element={<IngredientList/>}></Route>
          {/* <Route path="/recipe" element={<RecipeList/>}></Route> */}
          <Route path="/signup" element={<Signup register={registerHandler}/>}></Route>
          <Route path="/signin" element={<Signin login={loginHandler}/>}/>
          
        </Routes>
      </div>
     
    </div>
    </Router>
  )
}
