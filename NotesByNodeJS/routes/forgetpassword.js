const app = require('express').Router();
const userModel = require('../models/user.model');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zookdb@gmail.com", // generated ethereal user
    pass: "10@ZookZook", // generated ethereal password
  },
});

app.get('/forgetpassword', (req, res) => {
  res.render('forgetpassword.ejs', {isLoggedIn: false})
});

app.post('/handleforgetpassword', async (req, res) => {
  const email = req.body.email;
  // const user = await userModel.findOne({email});
  var token = jwt.sign({email}, 'shhhhh', { expiresIn: 60 * 50 }); // expires after 5 min

  let info = await transporter.sendMail({
      from: '"NotesByNodeJS" <zookdb@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      html: `
      <b>Your Email is:</b> <span>${email}</span>
      <br>
      <a href="http://localhost:3000/resetpassword/${token}">Click to reset your password</a>
      `, // html body
  });
  res.redirect('/forgetpassword')
});

app.get('/resetpassword/:token', async (req, res) => {
  let token = req.params.token
  jwt.verify(token, 'shhhhh', async function(err, decoded) {
    const user = await userModel.findOne({email: decoded.email});
    res.render('resetpassword.ejs', {isLoggedIn: false, error: [], newPassword:''})
  });
});

app.post('/handleResetPassword', 
  check('newPassword').notEmpty(),
  check('rePassword').custom((value, { req }) => {
    if (value !== req.body.newPassword) {
        throw new Error('Password confirmation does not match password');
    }
    return true;
  }),
  async (req, res) => {
    const newPassword = req.body.newPassword;
    const error = validationResult(req);
    
    let url = req.rawHeaders.filter(str => str.match('/resetpassword/')).toString()
    let urlSplit = url.split("/");
    let token = urlSplit[urlSplit.length - 1]
    let decoded = jwt.verify(token, 'shhhhh');
    let user = await userModel.findOne({email: decoded.email});

    console.log(user)
    console.log(error.array());
    console.log(newPassword);
    if (error.isEmpty()) {
      bcrypt.hash(newPassword, 7, async (err, hash) => {
        await userModel.findOneAndUpdate({email: decoded.email}, {password: hash})
        res.redirect('/home')
      })
    } else {
      res.render('resetpassword.ejs', {isLoggedIn: false, error: error.array(), newPassword})
    }
  }
);

module.exports = app