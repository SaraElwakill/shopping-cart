// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://127.0.0.1:27017'
// MongoClient.connect(url)

const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017'

const db = async (url) => {
    return mongodb.connect(url, {
        useNewUrlParser: true
    })
}


module.exports = db