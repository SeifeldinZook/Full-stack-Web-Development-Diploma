const express = require('express'); 
const server = express();
const path = require ('path');
const mongoose = require('mongoose');
const {urlencoded} = require('express');
const multer = require('multer');
const homeRoute = require ('./routes/home');
const dashboardRoute = require ('./routes/dashboard');
const newArticleRoute = require ('./routes/newUser');
const updateArticleRoute = require ('./routes/updateUser');

server.use (homeRoute);
server.use (dashboardRoute);
server.use (newArticleRoute);
server.use (updateArticleRoute);
server.use (express.static(path.join(__dirname, 'public')));
server.use ('uploads', express.static(path.join(__dirname, 'uploads')));
server.set('view engine','ejs');
server.use(urlencoded({extended:true}))
// server.set('views',path.join(__dirname,'views'))

server.listen(8544, ()=>{
  console.log('server is running');
});
