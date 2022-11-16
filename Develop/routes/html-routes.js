// Add dependencies
const fs = require('fs');

//Routing
module.exports = function(app) {

    app.get('/notes', (req,res)=> {
        res.sendFile('./public/notes.html',{root:__dirname});
    });

    app.get('*', (req,res)=> {
        res.sendFile('./public/index.html', {root:__dirname});
    })
};
