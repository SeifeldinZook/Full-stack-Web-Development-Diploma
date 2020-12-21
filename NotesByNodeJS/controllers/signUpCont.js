const bcrypt = require('bcrypt');
const { check, validationResult} = require('express-validator');
const userModel = require('../models/user.model');

module.exports.handleSignUp = async (req, res) => {
    const {fname, lname, email, password} = req.body
    const error = validationResult(req);
    // console.log(error.isEmpty());
    if (error.isEmpty()) {
        const user = await userModel.findOne({email});
        if (user == null) {
            bcrypt.hash(password, 7, async (err, hash) => {
                await userModel.insertMany({fname, lname, email, password: hash})
                res.redirect('/signin')
            });
        } else {
            res.render('signup.ejs', {error: [{ param: 'exists' }], oldValues: {fname, lname, email, password}, isLoggedIn: false})
        }
    } else {
        res.render('signup.ejs', {error: error.array(), oldValues: {fname, lname, email, password}, isLoggedIn: false});
    }
}