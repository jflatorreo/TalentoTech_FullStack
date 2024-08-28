const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {String,required: true},
    email: {type:String, unique:true},
    password: {type:String, required: true},
    //...
})

const UserMongoose = mongoose.model('User', UserSchema);

const newUser = new UserMongoose({
    name: "Julian",
    email: "julian@gmail.com",
    password: "12345"
})

newUser.save((e)=>{
    if (e) throw e;
    console.log("Usuario guardado")
}).then()

UserMongoose.find({email:'julian@gmail.com'}, (err,res)=>{
    if (err) throw err;
    console.log(res);
    }
)

UserMongoose.updateOne(
    {email: `julian@email.com`},
    {$set: {age:234}},
    (err) =>{
        if (err) throw err;
        console.log("Usuario actualizado")
    }
)

UserMongoose.remove({email:'julian@email.com'}, (err) =>{
    if (err) throw err;
    console.log("Usuario eliminado")
})


