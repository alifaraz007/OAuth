const express = require('express');
const bodyParser = require('body-parser');
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, ()=>{
    console.log('connected to database')
})

//initialize route
app.use('/user', require('./routes/user_route'));

//error handler middleware
app.use((err, req, res, next) => {
    res.status(422).json(err);
})

//listening to port
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`now listening on port ${port}`);
})