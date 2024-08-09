
const express = require("express")
const MongoUser = require("./model/mongoUser.js") ;
const MySqlUser = require ("./model/user.js");

const app = express();

app.use(express.json())

app.post('/mongoUser',async (req,res)=>{
    const {name,email,password}=req.body
    const User = new MongoUser({name,email,password})
    await User.save()
    res.status(201).json(User)

})

app.post('/mySQLUser',async (req,res)=>{
    const {name,email,password}=req.body
    const User = new MySqlUser(name,email,password)
    await User.saveUser()
    res.status(201).json(User)

})

module.exports = app