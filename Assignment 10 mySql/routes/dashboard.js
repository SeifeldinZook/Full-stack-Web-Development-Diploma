const dashboardRoute = require ('express').Router();

dashboardRoute.get('/dashboard', (req, res)=>{
  res.render('dashboard.ejs')
});

module.exports = dashboardRoute;