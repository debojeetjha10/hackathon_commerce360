const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/Users')
const CatalogModel = require('./Models/Catalogs')

const bcrypt = require('bcrypt')

const app = express()
app.use(express.json())
app.use(cors())

// add connection string of mongoDB
mongoose.connect('mongodb+srv://swaptiwari:microsoft~123@cluster0.qrdgphz.mongodb.net/?retryWrites=true&w=majority')

// Register new user
app.post('/register', (req,res) => {
    const {email,password} = req.body 

    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("User Already Exists!")
        }
        else{
            // hash password
            bcrypt.hash(password, 10)
            .then(hash => {
                UserModel.create({email: email,password: hash})
                .then(users => {
                    res.json(users)
                    console.log("successfully registered users")
                })
                .catch(err => {
                    res.json(err)
                    console.log(err)
                })
            })
        }
    })
    .catch(err => res.json(err))
})

// Login
app.post('/login',(req,res) => {
    const {email,password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, response) => {
            if (response) {
                res.json("Success")
            }
            else {
                res.json("Invalid Login")
            }
            })
        }
        else{
            res.json("Invalid Login")
        }
    })
})

app.post('/catalogData',(req,res) => {
    const {value} = req.body
    console.log(value)
    CatalogModel.find({productname:value})
    .then(data => {
        console.log(data.attributes)
        res.json(data)
    })
    .catch(err => console.log(err))

})


app.listen(3001, () => {
    console.log("server is running")
})