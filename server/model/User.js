const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        maxLength: 32,  
    },
    email: {
        type: String,
        required: true,
        maxLength: 32,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
})

module.exports = mongoose.model('User', userSchema);
