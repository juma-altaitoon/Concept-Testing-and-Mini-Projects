const User = require("../models/User");

const jwt = require("jsonwebtoken")

const bcrypt = require('bcrypt');
const salt = 10;
let passport = require('../helper/ppConfig');


// GET - Sign Up Page
exports.auth_signup_get = (req,res) => {
    res.render("auth/signup");
}
// POST - Submit and Store Sign Up Form
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);
    // Hash password before saving user
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);
    user.password = hash;
  // Save User
    user.save()
      .then(() => {
        // res.redirect("/");
        res.json({message: "User Created"})
      })
      .catch((err) => {
        console.log(err);
        res.send("ERROR!!!");
      });
  };
  
// GET - Sign In Page 
exports.auth_signin_get = (req, res)=> {
    res.render("auth/signin");
}
// // POST - Sign In Page : Submit Sign In form and verify user and password 
// exports.auth_signin_post =
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/auth/signin",
//   })

// Jwt Auth
exports.auth_signin_post = async (req, res)=>{
  let {emailAddress, password} = req.body;
  console.log(emailAddress)
  try{
    let user = await User.findOne({emailAddress});
    console.log(user)
    if (!user) {
      return res.json({message: "User not Found"});
    }
    const isMatch = await bcrypt.compareSync(password, user.password);
    console.log (` ${password} ---${user.password} `)
    console.log(isMatch);
    if (!isMatch){
      return res.json({message: "Wrong Password"});
    }
    const payload = {
      user : {
        id : user._id,
        name:(user.firstName+" "+user.lastName)
      },
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      {expiresIn: 40000000},
      (err, token) =>{
        if (err) throw err;
        res.json({ token }).status(200);
      }
    );
  }
  catch(error) {
    res.json({message: "Failed to Log In!!"}).status=400
  }
}



  // HTTP GET - Logout Route - To logout the user
exports.auth_logout_get = (req, res)=>{

    // Invalidate the session
    req.logout(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/auth/signin')
    });
}