// Note Model
const Note = require('../models/NoteModel')
const mongoose = require('mongoose')

// ----------------- API Requests ----------------- //
// GET User Note
const GetUserNote = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.send({
            status: 400,
            message: 'Data is not valid'
        })
    }

    const note = await Note.findById(id)

    if(!note) {
        return res.send({
            status: 404,
            message: 'Data not found'
        })
    }

    res.send({
        status: 200,
        data: note
    })
}

// GET All Note
const GetAllNote = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.send({
            status: 200,
            data: notes
        })
    }
    catch (error) {
        // Catch error message
        res.send({
            status: 404,
            message: error
        })
    }
}

// Create a new Note
const CreateNewNote = async (req, res) => {

    const { title, name, description } = req.body;

    try {
        const note = await Note.create({title, name, description})
        res.send({
            status: 201,
            data: note
        })

    }
    catch (error) {
        res.send({
            status: 404,
            message: 'error'
        })
    }
}

// Delete a note
const DeleteNote = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.send({
            status: 400,
            message: 'Data is not valid'
        })
    }

    const note = await Note.findOneAndDelete({_id: id})

    if(!note) {
        return res.send({
            status: 404,
            message: 'Data not found'
        })
    }

    res.send({
        status: 200,
        message: 'Note successfully deleted',
        data: note
    })
}

// Update a note
const UpdateNote = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.send({
            status: 400,
            message: 'Data is not valid'
        })
    }

    const note = await Note.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!note) {
        return res.send({
            status: 404,
            message: 'Data not found'
        })
    }

    res.send({
        status: 200,
        message: 'Note updated',
        data: note
    })
}

module.exports = {
    GetUserNote,
    GetAllNote,
    CreateNewNote,
    DeleteNote,
    UpdateNote
}