var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/users', function(req, res){
  usersCtrl.index
});

// POST /posts

router.post('/posts', function(req, res){
  isLoggedIn,usersCtrl.addFact
});



// DELETE /postss/:id
router.delete('/posts/:id', function(req, res){
  usersCtrl.delFact
});

function isLoggedIn(req, res, next){
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
