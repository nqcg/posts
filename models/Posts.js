const mongoose = require('mongoose')
const schema = mongoose.Schema

const postSchema = new schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('post', postSchema)