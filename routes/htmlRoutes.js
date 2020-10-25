var router =require("express").Router();
var path =require("path");

// gets the notes.html file and puts it to the server
router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})

// gets the homepage and displays it as the landing page
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports = router