const fs = require('fs');

module.exports = function (app) {

// Add note
app.post('/api/notes', (req, res)=> {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf=8'));
    let notelength = (noteList.length).toStrinig();

    newNote.id = notelength;
    noteList.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

// Delete note
app.delete('/api/notes/:id', (req, res)=> {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf=8'));
    let noteId = (req.params.id).toString();

    noteList = noteList.filter(selected => {
        return selected.id !=noteId;
    });

    fs.writeFileSync('./db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});

//listen to port
app.listen(3000);
};