const express = require('express');
const server = express();
const db = require('./database/db.js');

server.use(express.static('public'));
server.use(express.urlencoded({
    extended: true
}));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views',{
    express: server,
    noCache: true
});

server.get('/', (req, res)=>{
    return res.render('index.html');
});

server.get('/users', (req, res) =>{
    return res.render('users.html')
});

server.post('/saveuser', (req, res)=>{
    const query = `
        UNSERT INTO clients(
            name,
            email,
            phone,
            numbers
            ) VALUES (?, ?, ?, ?)
        )
    `;

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.numbers
    ];

    function afterInsertData(err){
        if(err){
            return res.send('Erro de cadastro');
        }

        return res.render('users.html', {saved: true});
    }

    db.run(query, values, afterInsertData);
})

server.get('/us', (req, res)=>{

    db.all('SELECT * FROM clients', function(err, rows){
        if(err){
            return console.log(err);
        }

        const total = rows.length;

        return res.render('us.html', {
            clients: rows,
            total: total
        });
    });
});

server.listen(3000);
