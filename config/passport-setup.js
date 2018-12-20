const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const key = require('./keys')

passport.use(new GoogleStrategy({
    //option for the google strategy
    callbackURL: '/user/google/redirect',
    clientID: key.google.clientID,
    clientSecret: key.google.clientSecret
}, (accessToken, refreshToken, profile, data)=>{
    //passport callback function
    console.log(profile);
    
}))