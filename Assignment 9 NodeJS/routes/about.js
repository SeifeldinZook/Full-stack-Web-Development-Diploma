const aboutRoute = require ('express').Router();

aboutRoute.get('/about', (req, res)=>{
  // res.send('hello zook again');
  res.render('about.ejs')
});

module.exports = aboutRoute;