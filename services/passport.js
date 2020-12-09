const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const db = require ("../models")

passport.serializeUser((user, done) => {
      done(null, user.id);
});

passport.deserializeUser((id, done) => {
      db.User.findById(id)
            .then(user => {
                  done(null, user);
            })
});

passport.use(new GoogleStrategy(
      {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
            const existingUser = await db.User.findOne({ googleId: profile.id })

            if (existingUser) {
                  return done(null, existingUser);
            }

            const user = await new db.User({
                  googleId: profile.id,
                  displayName: profile.displayName,
                  email: profile.emails[0].value,
            }).save();
            done(null, user);
      }
)
);

