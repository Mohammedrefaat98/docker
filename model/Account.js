const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})
module.exports = Account = mongoose.model('accounts', AccountSchema)