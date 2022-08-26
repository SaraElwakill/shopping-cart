const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "pls provide the name"],

    },
    email : {
        type: String,
        required: [true, "pls provide the email"],
        unique: true,
    },
    password : {
        type: String,
        required: [true, "pls provide the password"],
    },
},
    {timestamps:true})
    
//schema middleware
    UserSchema.pre("save", async function(next){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    })
//add method
    UserSchema.method.passwordCheck = async function(password){
        return await bcrypt.compare(password, this.password)
    }

    module.exports = mongoose.model("User",UserSchema )