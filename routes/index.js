var express = require('express');
var router = express.Router();
var passport = require('passport');

//home page
router.get('/', function(req, res, next) {
  res.render('spools/index')
});


router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/feed',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// router.get('/feed', function(req, res, next) {
//   // res.render('spools/feed', { title: 'Spool' });
// });

module.exports = router;
