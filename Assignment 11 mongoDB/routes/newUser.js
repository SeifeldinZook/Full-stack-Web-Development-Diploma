const express = require('express')
const newArticleRoute = require ('express').Router();
const path = require ('path');
const {urlencoded} = require('express');
const mongoose = require('mongoose');
const userModel = require('../DBmodel/userDB');
const multer = require('multer');
newArticleRoute.use('uploads', express.static(path.join(__dirname, 'uploads')));

newArticleRoute.use(urlencoded({extended:true}));
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads')
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + '-' + file.originalname )
  }
});

function fileFilter (req, file, cb) {
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
};

newArticleRoute.use (multer({dest:"../uploads", storage:storage, fileFilter:fileFilter}).single('img'));

newArticleRoute.get('/newUser', (request, respond)=>{
  respond.render('newUser.ejs');
});

newArticleRoute.post('/addUser', async(request, respond)=>{
  // console.log(request);
  if (request.file == undefined) {
    respond.redirect('/');
  } else {
    await userModel.insertMany({
      name: `${request.body.name}`, 
      age: `${request.body.age}`, 
      email: `${request.body.email}`, 
      password: `${request.body.password}`, 
      sex: `${request.body.sex}`, 
      imgURL: `${request.file.path}`
    });
    respond.redirect('/')
  }
});

module.exports = newArticleRoute;
