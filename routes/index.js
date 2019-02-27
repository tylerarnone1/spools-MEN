var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/', function(req, res) {
  res.redirect('/users');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/users',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spool' });
});

module.exports = router;
