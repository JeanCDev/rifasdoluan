const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./src/database/numbers.db');

module.exports = db;


/*db.serialize(()=>{

    db.run(`
        CREATE TABLE IF NOT EXISTS clients(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            numbers TEXT
        )
    `);

    const query = `
            INSERT INTO clients(
                name,
                email,
                phone,
                numbers
            ) VALUES (?, ?, ?, ?)
    `;

    const values = [
        'Jean',
        'jean@jean.com',
        '9999999',
        '109'
    ];

    function afterInsertData(err){
        if(err){
            return console.log(err);
        }

        console.log('Cadastrado');
        console.log(this);
    }

    db.run(query, values, afterInsertData);

});*/