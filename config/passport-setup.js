const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const key = require('./keys')
const User = require('../models/user_model')

passport.use(new GoogleStrategy({
    //option for the google strategy
    callbackURL: '/user/google/redirect',
    clientID: key.google.clientID,
    clientSecret: key.google.clientSecret
}, async (accessToken, refreshToken, profile, data) => {

    //checking if user exist in db
    const currentUser = await User.findOne({ googleId: profile.id })
    if (currentUser) {
        //user already exist
    } else {
        //saving new user
        const newUser = await new User({
            username: profile.displayName,
            googleId: profile.id
        }).save()
        console.log(newUser)
    }

}))