const newArticleRoute = require ('express').Router();
const path = require ('path');
const mySql = require ('mysql2');
const { urlencoded } = require('express');

newArticleRoute.use(urlencoded({extended:true}))

const connection = mySql.createConnection ({
  host:'localhost',
  database: 'assignment9',
  user:'root',
  password:'root',
  port:'8889',
  socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock'
})

newArticleRoute.get('/newArticle', (req, res)=>{
  res.render('newArticle.ejs');
  // connection.execute(`select * from articles`, (error, result)=>{
  //   if (error) {
  //     res.json('Error')
  //   } else {
  //     console.log(result);
  //   }
  // })
});

newArticleRoute.post('/addArticle', (req, res)=>{
  connection.execute(`INSERT INTO articles (title, article) VALUES ('${req.body.title}', '${req.body.article}')`);
  console.log(req.body);
  res.redirect('/')
});

module.exports = newArticleRoute;
