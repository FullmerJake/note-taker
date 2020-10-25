var router =require("express").Router();
var notes = require("../db/notes.js");

// GET route to display all notes you've made
router.get("/notes", function(req, res){
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
// POST route, adds a new note to the left side
router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
// DELETE route, takes the JSON object ID and uses removeNote function to delete the note.
router.delete("/notes/:id", function(req, res){
    notes.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
})

module.exports = router;