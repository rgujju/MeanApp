const env = require('./env.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require ('mongoose');

const app = express();

// Database connection
mongoose.connect(env.MLAB_DRIVER);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', function() {
  // Connection Succesfull
  console.log("Database connection succesful");
});

// Routes
const users = require('./routes/users');



// Middleware

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cross domain access
app.use(cors());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport); //weird syntax

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));


app.use('/users',users);

// Index page routing
app.get('/',(req,res) => {
    res.send("Working");
})

// Start Server!
app.listen(env.PORT, () =>{
    console.log('Server started on port: '+env.PORT);
})