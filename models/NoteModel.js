const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    description: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Note', NotesSchema)