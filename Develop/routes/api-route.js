const fs = require('fs');
const db = require('../db/db.json');

module.exports = function (app) {

    //Get note    
    app.get('/api/notes', (req, res)=> {
        res.JSON(db);
    })

    // POST note
    app.post('/api/notes', (req, res)=> {
        db.push(req.body);
        db.forEach((obj, i)=> {
            obj.id = i+1;
        });
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
            res.json(db);
    });

    // Delete note
    app.delete('/api/notes/:id', (req, res)=> {
        let noteId = req.params.id;
        
        noteList = noteList.filter(selected => {
            return selected.id !=noteId;
            db.splice(id - 1, 1);
            db.forEach((obj, i)=> {
                obj.id = i + 1;
            })
        });

        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json(noteList);
    });

    //listen to port
    app.listen(3000);
};