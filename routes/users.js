const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const env = require('../env');
const User = require('../models/user');



router.post('/register',function(req,res,next){
    let newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    // Before adding check if the user already exists
    User.addUser(newUser,(err,user)=>{
        if(err){
            console.log(err);
            res.json({
                success:false,
                msg: 'Failed to register User',
                
            })
        }else{
            console.log("New User Registered! Username: "+ newUser.username);
            res.json({
                success:true,
                msg: 'User registration succesfull',
            })
        }
    })

});

router.post('/authenticate',function(req,res,next){
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err,user)=>{
        if(err) {
            throw err;
        }else{
            if(!user){
                return res.json({ // since this is all inside a function it needs to return
                    success: false,
                    msg: "User not found"
                })
            }else{
                User.comparePassword(password,user.password,(err,isMatched)=>{
                    if (err){
                        throw err;
                    }else{
                        if(isMatched){
                            const token = jwt.sign(user,env.SECRET,{
                                expiresIn: 604800 //1 week
                            })
                            return res.json({
                                    success:true,
                                    token:'JWT '+token,
                                    user:{
                                        id:user._id,
                                        firstName: user.firstName,
                                        lastName: user.lastName,
                                        email:user.email,
                                        username:user.username,
                                    }
                                 })
                        }else{
                            return res.json({
                                    success:false,
                                    msg: "Wrong Username or Password"
                                })
                        }

                    }
                })
            }
        }
    })
});

router.get('/profile',passport.authenticate('jwt',{session:false}),function(req,res,next){
res.json({
        success:true,
        user:{
            id:req.user._id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email:req.user.email,
            username:req.user.username,
          },
        msg: 'Authenticated succesfully'
    })
});




module.exports = router;