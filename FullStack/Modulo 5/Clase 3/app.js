//app.js
const express = require ("express")
const UserModel = require("./models/UserModel")

app = express()
    //...
 //const Model = new UserModel();

app.get('/users', async (req, res) => {
    const users = await UserModel.getAllUsers();
    res.json(users);
});



