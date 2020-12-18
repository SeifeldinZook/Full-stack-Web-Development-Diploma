const updateArticleRoute = require ('express').Router();
const path = require ('path');
const mySql = require ('mysql2');
const { urlencoded } = require('express');

updateArticleRoute.use(urlencoded({extended:true}))

const connection = mySql.createConnection ({
  host:'localhost',
  database: 'assignment9',
  user:'root',
  password:'root',
  port:'8889',
  socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock'
})

updateArticleRoute.get('/updateArticle/:id', (req, res)=>{
  connection.execute(`select * from articles where id=${req.params.id}`, (error, result)=>{
    if (error) {
      res.json('Error')
    } else {
      res.render('updateArticle.ejs', {result:result[0]});
    }
  })
});

updateArticleRoute.post('/updateUser/:id', (req, res)=>{
  connection.execute(`update articles set title='${req.body.title}', article='${req.body.article}' where id=${req.params.id}`);
  res.redirect('/')
});

module.exports = updateArticleRoute;
