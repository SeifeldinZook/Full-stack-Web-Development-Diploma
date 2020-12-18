const express = require('express'); 
const server = express();
const path = require ('path');
const mySql = require ('mysql2');

const homeRoute = require ('./routes/home');
const dashboardRoute = require ('./routes/dashboard');
const newArticleRoute = require ('./routes/newArticle');
const updateArticleRoute = require ('./routes/updateArticle');

server.use (homeRoute);
server.use (dashboardRoute);
server.use (newArticleRoute);
server.use (updateArticleRoute);
server.use (express.static(path.join(__dirname, 'public')));

server.set('view engine','ejs')
// server.set('views',path.join(__dirname,'views'))
// server.use(express.urlencoded({extended:true}))

server.listen(3000, ()=>{
  console.log('server is running');
});
