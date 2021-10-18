const router = require('express').Router();
const  note  = require('../../db/db.json');

router.get('/notes', (req, res) => {
    console.log(note);
    res.json(note);
});


router.post('/notes', (req, res) =>{
    res.json(req.body);
})

module.exports = router;