require('dotenv').config();
const express = require('express');
const expresshbs = require('express-handlebars');
const { LIMIT_COMPOUND_SELECT } = require('sqlite3');
const Users = require('./db').Users
const app = express();
const hbs = expresshbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

const sqlite3 = require('sqlite3').verbose();
let sql;

//Установка порта страницы
app.set('port', process.env.Port || 3001)

app.listen(app.get('port'), () => {
  console.log(`Веб сервер поднялся на http://127.0.0.1:${app.get('port')}`);
})

app.get('/', async (reg, res, next) => {
  await Users.all((err, users) => {
    if (err) return next(err)
    const userData = Array(users);
    {
      users: userData
    }
    if (users.length) {
      res.render('index', {
        users: users,
        title: 'Главная страница',
      })
    } else {
      res.render('index', {
        users: userData,
        title: 'Главная страница',
      })
    }
  }) 
})
