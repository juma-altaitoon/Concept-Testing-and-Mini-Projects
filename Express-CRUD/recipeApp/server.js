// Dependencies
const express = require('express');
const mongoose = require('mongoose');
//Require Expres-ejs-layouts
const expressLayouts = require('express-ejs-layouts');

require('dotenv').config();

// Port Config
const port = process.env.PORT;

// Intitialize Express
const app = express();

// Look for static files in public folder 
app.use(express.static("public"));

// Look into views folder for layout.ejs
app.use(expressLayouts);

// Express Session & Passport 
let session = require('express-session');
let passport = require('./helper/ppConfig');

// Session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 36000000}
}));

app.use(passport.initialize());
app.use(passport.session());

// Sharing the information 
app.use(function(req,res, next){
    res.locals.currentUser = req.user;
    next();
})


// Import Routes
const indexRoute = require('./routes/index');
const recipeRoute = require('./routes/recipes');
const ingredientRoute = require('./routes/ingredients');
const authRoute = require('./routes/auth');
// Mount Routes
app.use('/', indexRoute);
app.use('/', recipeRoute);
app.use('/', ingredientRoute);
app.use('/', authRoute);
// Node.js look into views folder for all ejs files
app.set("view engine", "ejs");

mongoose.set('strictQuery', false);

// MongoDB Connection
mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=> {
        console.log("MongoDB Connected Successfully")
    }
)

// Listen to specific port
app.listen(port, ()=>{
    console.log(`Blog App is running on ${port}`);
})

