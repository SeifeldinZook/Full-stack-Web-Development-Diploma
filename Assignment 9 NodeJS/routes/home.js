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

homeRoute.get('/', (req, res)=>{
  connection.execute(`select * from userDetails`, (error, result)=>{
    if (error) {
      res.json('Error')
    } else {
      res.render('home.ejs', {result});
    }
    // console.log(result);
  })
});

homeRoute.post('/handleForm', (req, res)=>{
  connection.execute(`INSERT INTO userDetails (Name, Age, Email, Password, Gender) VALUES ('${req.body.name}', '${req.body.age}', '${req.body.email}', '${req.body.password}', '${req.body.gender}')`);
  console.log(req.body);
  res.redirect('/')
});

homeRoute.get('/delete/:id', (req, res)=>{
  connection.execute(`delete from userDetails where id=${req.params.id}`);
  console.log(req.params);
  res.redirect('/')
});

homeRoute.get('/editForm/:id', (req, res)=>{
  connection.execute(`select * from userDetails where id=${req.params.id}`, (error, result)=>{
    if (error) {
      res.json('Error')
    } else {
      res.render('editForm.ejs', {result:result[0]});
    }
  })
});

homeRoute.post('/updateUser/:id', (req, res)=>{
  console.log(req.body);
  connection.execute(`update userDetails set name='${req.body.name}', age='${req.body.age}', email='${req.body.email}', password='${req.body.password}'where id=${req.params.id}`);
  res.redirect('/')
});
module.exports = homeRoute;