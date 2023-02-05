// module.exports= (req, res, next) =>{
//     if(!req.user){
//         res.redirect("/auth/signin")
//     }
//     else
//     {
//         next();
//     }
// }

// JWT Token
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = (req, res, next) =>{
    let token = ""
    var authorizationToken = req.header("Authorization");
    
    if(authorizationToken){
        authorizationToken = authorizationToken.replace("Bearer ", "");
        token = authorizationToken;
        console.log(token)
    }
    if(!token){
        return res.status(401).json({"message": "You are Not Allowed "})
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded.user;
        next();
    }
    catch(error){
        return res.json({"message": "token invalid"})
    }
}
