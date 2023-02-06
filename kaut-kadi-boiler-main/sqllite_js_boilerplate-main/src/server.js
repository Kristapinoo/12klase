const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();

// pieslēdzamies mūsu DB
const database = new sqlite3.Database("./src/db/database.db");

const app = express()
const port = 3004

// ļaujam piekļūt serverim no citiem domēniem
app.use(cors({
  origin: '*'
}))

app.use(bodyParser.json());

database.serialize(() => {
  database.run(`
    CREATE TABLE IF NOT EXISTS autors (
      id int,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    );
  
    CREATE TABLE IF NOT EXISTS gleznas (
      id int NOT NULL,
      name VARCHAR(255) NOT NULL,
      imgSrc char NOT NULL,
      author_id int,
      PRIMARY KEY (id),
      FOREIGN KEY (author_id) REFERENCES autors(id)
    ); 
  `);

  database.run(`
    INSERT INTO autors (name)
    VALUES('Bud Powell');
  `);

  database.run('SELECT * from autors', (result) => {
    console.log('result', result);
})

});

// controlieris kurš atbild par to, kad tiks prasīts GET piepeasījums uz root, 
// jeb šajā gadījumā http://localhost:3004/
app.get('/', (req, res) => {

  res.json({name: 'John'})

  // database.get(`SELECT * FROM movies`,(err, row) => {
  //   res.json(row);
  // })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})