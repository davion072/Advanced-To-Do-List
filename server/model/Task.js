const mongoose = require('mongoose')

const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },

    isCompleted: {
        type: Boolean,
        default: false
    },

    priority: {
        type: Number,
        default: 1,
    },

    tags: [{
        type: String,
        trim: true,
        required: true
    }],

    isArchieved: {
        type: Boolean,
        default: false,
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true, })

module.exports = mongoose.model('Task', taskSchema)