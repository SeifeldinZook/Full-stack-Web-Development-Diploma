const express = require('express'); 
const homeRoute = express.Router();
const path = require ('path');
const {urlencoded} = require('express');
const mongoose = require('mongoose');
const userModel = require('../DBmodel/userDB');
homeRoute.use(urlencoded({extended:true}));
homeRoute.use('uploads', express.static(path.join(__dirname, 'uploads')));

var searchedWord = [];

homeRoute.get('/', async(request, respond)=>{
  let usersDB = await userModel.find();
  // console.log(usersDB);
  respond.render('home.ejs', {searchedWord, usersDB});
});

homeRoute.get('/delete/:id', async(request, respond)=>{
  await userModel.findByIdAndDelete({_id: `${request.params.id}`});
  console.log(request.params);
  respond.redirect('/')
});

homeRoute.post('/search', async(request, respond)=>{
  let usersDB = await userModel.find({ name: `${request.body.search}` });
  searchedWord = [];
  searchedWord.push(request.body.search)
  respond.render('home.ejs', {searchedWord, usersDB});
});

module.exports = homeRoute;
