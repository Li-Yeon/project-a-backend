const express = require('express');
const router = express.Router();

const { GetUserNote, GetAllNote, CreateNewNote } = require('../controllers/NoteController');

// Get a user Note
router.get('/getusernote' + '/:id', GetUserNote)

// Get a user Note
router.get('/getallnote', GetAllNote)

// Create a new Note
router.post('/createnote', CreateNewNote)

module.exports = router