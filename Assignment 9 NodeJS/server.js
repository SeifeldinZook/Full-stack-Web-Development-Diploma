const express = require('express'); 
const server = express();
const path = require ('path');
const mySql = require ('mysql2');

const homeRoute = require ('./routes/home');
const aboutRoute = require ('./routes/about');

server.use (homeRoute);
server.use (aboutRoute);
server.use (express.static(path.join(__dirname, 'public')));

server.set('view engine','ejs')
// server.set('views',path.join(__dirname,'views'))
// server.use(express.urlencoded({extended:true}))

server.listen(3000, ()=>{
  console.log('server is running');
});
