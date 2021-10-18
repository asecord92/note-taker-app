const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const note  = require('../../db/db.json');


function createNote(body, note) {
    const notes = body;
    note.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(note, null, 2)
    );
    
};
router.get('/notes', (req, res) => {
    res.json(note);
});


router.post('/notes', (req, res) =>{
    req.body.id = note.length.toString();
    const notes = createNote(req.body, note);
    res.json(notes);
})

module.exports = router;