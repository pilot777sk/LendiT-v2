const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/user");

module.exports = {
  login: function (req, res){
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({
              success: true,
              user: {
                email: user.email,
                location: user.location,
                name: user.name,
                phone: user.phone 
              }
            });
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  },
  signup: function (req, res){
    if (!req.body.username || !req.body.password) {
      res.json({success: false, msg: 'Please pass username and password.'});
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        location: req.body.location
      });
      console.log(newUser);
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  } 
}
