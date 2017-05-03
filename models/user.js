const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const env = require('../env.js');

const UserSchema = mongoose.Schema({
        username: {
         type: String,
         required: true
        },
        firstName: {
         type: String,
         required: true
        },
        lastName: {
         type: String,
         required: true
        },
        email: {
         type: String,
         required: true
        },
        password:{
         type: String,
         required: true
        }
    });


// Export and compile the user schema
const User = module.exports = mongoose.model('User',UserSchema);

//
module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByUsername = function(username,callback){
    const query = {username : username}
    User.findOne(query,callback);
}



// Adding a new User to the database
module.exports.addUser = function(newUser,callback){
    bcrypt.genSalt(10,(err,salt) => {
        if (err){ 
            throw err; 
        }else{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err){
                    console.log("Error occured while creating hash");
                }else{
                    newUser.password = hash;
                    newUser.save(callback);
                }
            })
        }
    });
}

module.exports.comparePassword= function (testPassword,hash,callback){
    bcrypt.compare(testPassword,hash,(err,isMatched)=>{
        if(err) {
            throw err;
        }else{
            callback(null,isMatched)
        }
    })
}
