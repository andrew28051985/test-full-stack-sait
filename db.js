const sqlite3 = require('sqlite3').verbose();
let sql;

//Connect to DB
const db = new sqlite3.Database('./basa.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
})

class Users {
  static all(cb) {
    db.all('SELECT * FROM users', cb)
  }
  static find(id, cb) {
    db.get('SELECT * FROM users WHERE id = ?', id, cb)
  }
  static create(data, cb) {
    const sql = 'INSERT INTO users(first_name, email) VALUES(?, ?)'
    db.run(sql, data.first_name, data.email, cb)
  }
  static delete(id, cb) {
    if (!id) return cb(new Error('Please provaid in id'))
    db.run('DELETE FROM users WHERE id = ?', id, cb)
  }
}

module.exports = db
module.exports.Users = Users

//Create table
/*sql = `CREATE TABLE users(ID INTEGER PRIMARY KEY NOT NULL UNIQUE, first_name varchar(25) NOT NULL, email varchar(128) NOT NULL)`;
db.run(sql);*/
/*sql = `CREATE TABLE phone(ID INTEGER PRIMARY KEY NOT NULL UNIQUE, user_id integer NOT NULL, phone integer NOT NULL, FOREIGN KEY(user_id) REFERENCES users(id))`;
db.run(sql);*/

//Drop Table
//db.run('DROP TABLE phone');

//Insert data into tables
/*sql = `INSERT INTO users(first_name, email) VALUES(?,?)`;
db.run(sql, ["Stepan", "stepan@gmail.com"], (err) => {
  if (err) return console.error(err.message);
});*/
/*sql = `INSERT INTO phone(user_id, phone) VALUES(?,?)`;
db.run(sql, [1, 9200235648], (err) => {
  if (err) return console.error(err.message);
});*/

//Update to date
//sql = `UPDATE users SET first_name = ? WHERE id = ?`;
/*sql = `UPDATE phone SET user_id = ? WHERE id = ?`;
db.run(sql, [2, 1], (err) => {
  if (err) return console.error(err.message);
});*/

//Querry to data
/*sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach(row => {
    console.log(row);
  });
});*/

//Delete date
/*sql = `DELETE FROM users WHERE id = ?`;
db.run(sql, [1], (err) => {
  if (err) return console.error(err.message);
});*/