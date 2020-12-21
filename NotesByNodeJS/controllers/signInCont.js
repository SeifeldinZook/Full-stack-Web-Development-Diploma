const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const userModel = require('../models/user.model');

module.exports.signIn = (req, res) => {
    if (req.flash('flashEmail')[0] == 'false') {
        isEmail = false
    } else if (req.flash('flashPassword')[0] == 'false') {
        isMatch = false
    } else {
        isEmail = true;
        isMatch = true;
    }
    res.render('signin.ejs', { isMatch, isEmail, isLoggedIn: false });
};

module.exports.handleSignIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email })
    if (user != null) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            req.session.userID = user._id;
            req.session.userFN = user.fname;
            req.session.isLoggedIn = true;
            var hour = 1000 * 60 * 60 * 24;      // 24 hours
            req.session.cookie.expires = new Date(Date.now() + hour)
            // req.session.cookie.maxAge = hour;
            res.redirect('/home')
        } else {
            // res.render('signin.ejs', {isMatch: false, isEmail: true, isLoggedIn: false})
            req.flash('flashPassword', 'false')
            res.redirect('/signin')
        }
    } else {
        // res.render('signin.ejs', {isMatch: true, isEmail: false, isLoggedIn: false})
        req.flash('flashEmail', 'false')
        res.redirect('/signin')
    }
}