var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user');
var LocalStrategy = require('passport-local');
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,

},function(accessToken, refreshToken, profile, cb) {
    console.log('a user has logged in with Oauth');
    User.findOne({'googleId': profile.id}, function(err, user){
        // console.log(req.user)
        if (err) return cb(err);
        if (user){
            //returning user
            if (!user.avatar){
                user.avatar = profile.photos[0].value;
                user.save(function(err){
                    return  cb(null, user);
           })}
           
        }else {
            //new user
            var newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newUser.save(function(err){
                if (err) return cb(err);
                return cb(null, newUser);
            });
        }
    });

}));

passport.serializeUser(function(user, done){
    done(null, user.id);
});
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });

});
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
