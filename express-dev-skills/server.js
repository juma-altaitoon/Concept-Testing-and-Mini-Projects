//  Loading express module
const express = require('express');
const ejs = require('ejs');
// Create new instance of express
const app = express();
// Port Config
const port = 4000;
// Body Parser
app.use(express.urlencoded({extended: true}));

const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

app.use('/', indexRouter);
app.use('/', skillsRouter);




app.listen(port, function() {
    console.log(`Hello-express is listening on port ${port}`);
});
