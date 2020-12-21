const app = require('express').Router();
const signUpController = require('../controllers/signUpCont');
const { check, validationResult} = require('express-validator');

app.get('/', (req, res) => {
    res.render('signup.ejs', {error: [], oldValues: {fname:'', lname:'', email:'', password:''}, isLoggedIn: false})
});

app.post('/handleSignUp',
    check('fname').matches(/[a-z]*/),
    check('lname').matches(/[a-z]*/),
    check('email').isEmail(),
    check('password').notEmpty(),
    check('rePassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        // Indicates the success of this synchronous custom validator
        return true;
    }),
    signUpController.handleSignUp
);

module.exports = app 