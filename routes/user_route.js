const router = require('express').Router();
const passport = require('passport')

router.post('/login', (req, res, next)=>{
    res.json('login')
});

router.post('/logout', (req, res, next)=>{
    res.json('logout')
});

router.post('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.post('/google/redirect',  passport.authenticate('google'), (req, res, next)=>{
    res.json('you have reached the callback URI');
})

module.exports = router;