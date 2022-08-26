const mongoose = require('mongoose')
const connectDb = async(uri)=>{ 
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}



module.exports = connectDb