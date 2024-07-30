const {connect} = require ("../Mongodb")

class userModelMongo{
    static async getAllUsers(){
        const db = await connect();
        return db.collection('users').find().toArray();
    }
}

module.exports = userModelMongo;