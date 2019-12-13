const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    datetime: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: false
    }


})
module.exports = Event = mongoose.model('events', EventSchema)