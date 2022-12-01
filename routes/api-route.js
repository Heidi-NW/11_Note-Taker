const fs = require('fs');
let db = require('../db/db.json');
const express = require('express');

const router = express.Router()

    // Get note    
    router.get('/api/notes', (req, res)=> {
        res.json(db);        
    });

 
    // POST note
    router.post('/api/notes', (req, res)=> {
        db.push(req.body);
        db.forEach((obj, i)=> {
            obj.id = i+1;
        });
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
            res.json(db);
    });

    // Delete note
    router.delete('/api/notes/:id', (req, res)=> {
        let noteId = parseInt(req.params.id);
        
        let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        console.log(noteList);
        db = noteList.filter(selected => {
            return selected.id !=noteId;
        });
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json(db);
    });

module.exports = router