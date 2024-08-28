const client = require ('../db/mongoConnector')

client.db.collection("User").insertOne({
    name: `User`,
    email: `user@email.com`,
    age:31
},(err,res)=>{
    if (err) throw err;
    console.log("Usuario guardado")
})

client.db.collection("User").find({name: `User`}).sort({name: -1}).exec((err,res)=>{
    if (err) throw err;
    console.log(res)
})

client.db.collection("User").updateOne(
    {email: `user@email.com`},
    {$set: {age:234}},
    (err,res) =>{
        if (err) throw err;
        console.log("Usuario actualizado")
    }
)

client.db.remove({email:'julian@email.com'}, (err) =>{
    if (err) throw err;
    console.log("Usuario eliminado")
})