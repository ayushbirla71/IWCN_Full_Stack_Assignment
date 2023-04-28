const express = require("express");
const {createNote, getNotes,deleteNote} = require('../controllers/notesController')
const router = express.Router();


router.post('/createNote', createNote);

router.get("/getNotes", getNotes);

router.delete("/deleteNote",deleteNote)

module.exports = router;