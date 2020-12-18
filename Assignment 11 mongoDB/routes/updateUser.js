const updateArticleRoute = require ('express').Router();
const path = require ('path');
const mongoose = require('mongoose');
const userModel = require('../DBmodel/userDB');
const {urlencoded} = require('express');

updateArticleRoute.use(urlencoded({extended:true}))

updateArticleRoute.get('/updateUser/:id', async(request, respond)=>{
  let result = await userModel.find({ _id: `${request.params.id}` });
  respond.render('updateUser.ejs', {result:result[0]});
});

updateArticleRoute.post('/updateUser/:id', async(request, respond)=>{
  await userModel.findByIdAndUpdate({_id: `${request.params.id}`}, {name: `${request.body.name}`, email:`${request.body.email}`, password:`${request.body.password}`, age:`${request.body.age}`, sex:`${request.body.sex}`});
  respond.redirect('/')
});

module.exports = updateArticleRoute;
