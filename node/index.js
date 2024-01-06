const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('Bruno Helder')`

connection.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

connection.query(sql)

app.get('/', (req,res) => {

    connection.query(
        'SELECT * FROM people', (err, rows, fields) => {
            if (err) throw err
            res.render('home.ejs', {data: rows})
        })  

})

app.listen(port, () => {
    console.log('Rodando na porta: ' + port)
})