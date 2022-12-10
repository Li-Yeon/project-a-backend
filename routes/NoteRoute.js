const express = require('express');
const router = express.Router();

const { 
    GetUserNote,
    GetAllNote,
    CreateNewNote,
    DeleteNote,
    UpdateNote
} = require('../controllers/NoteController');

// Get a user Note
router.get('/getusernote' + '/:id', GetUserNote)

// Get a user Note
router.get('/getallnote', GetAllNote)

// Create a new Note
router.post('/createnote', CreateNewNote)

// Delete a Note
router.delete('/deletenote' + '/:id', DeleteNote)

// Update a Note
router.patch('/updatenote' + '/:id', UpdateNote)

module.exports = router