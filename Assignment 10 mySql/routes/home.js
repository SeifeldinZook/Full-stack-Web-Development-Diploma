const homeRoute = require ('express').Router();
const path = require ('path');
const mySql = require ('mysql2');
const { urlencoded } = require('express');

homeRoute.use(urlencoded({extended:true}))

const connection = mySql.createConnection ({
  host:'localhost',
  database: 'assignment9',
  user:'root',
  password:'root',
  port:'8889',
  socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock'
})
var searchedWord = [];

homeRoute.get('/', (req, res)=>{
  connection.execute(`select * from articles`, (error, result)=>{
    if (error) {
      res.json('Error')
    } else {
      // console.log(result);
      searchedWord = [];
      res.render('home.ejs', {searchedWord, result});
    }
  })
});

homeRoute.get('/delete/:id', (req, res)=>{
  connection.execute(`delete from articles where id=${req.params.id}`);
  // console.log(req.params);
  res.redirect('/')
});

homeRoute.post('/search', (req, res)=>{
  // console.log(req.body.search);
  connection.execute(`SELECT * FROM articles WHERE title like "%${req.body.search}%"`, (error, result)=>{
    if (error) {
      res.json('Error')
    } else {
      searchedWord = [];
      searchedWord.push(req.body.search)
      res.render('home.ejs', {searchedWord, result});
    }
  })
});

module.exports = homeRoute;
