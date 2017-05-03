const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const env = require('../env.js');

module.exports = function(passport){
    let opts ={};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = env.SECRET;
    //opts.issuer = 'accounts.examplesoft.com';
    //opts.audience = 'yoursite.net';
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.getUserById(jwt_payload._doc._id,(err,user)=>{
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}