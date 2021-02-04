const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/UserModel.js');
const Donate = require('../models/DonateModel.js');
const generateToken = require('../utils.js');

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if (user) {
      if (req.body.password === user.password) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({message: 'Invalid user email or password'});
  }),
);

userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      password: req.body.password,
    });
    const created_user = await user.save();
    res.send({
      _id: created_user._id,
      name: created_user.name,
      number: created_user.number,
      email: created_user.email,
      password: created_user.password,
      token: generateToken(created_user),
    });
  }),
);

userRouter.post(
  '/donate',
  expressAsyncHandler(async (req, res) => {
    const donate = new Donate({
      name: req.body.name,
      age: req.body.age,
      country: req.body.country,
      city: req.body.city,
      address: req.body.address,
      postalcode: req.body.postalcode,
      bloodtype: req.body.bloodtype,
    });
    const user_donation = await donate.save();
    res.send({
      _id: user_donation._id,
      name: user_donation.name,
      age: user_donation.age,
      country: user_donation.country,
      city: user_donation.city,
      address: user_donation.address,
      postalcode: user_donation.postalcode,
      bloodtype: user_donation.bloodtype,
    });
  }),
);

userRouter.get(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const created_user = await User.find({});
    res.send(created_user);
  }),
);

userRouter.get(
  '/donate',
  expressAsyncHandler(async (req, res) => {
    const created_donations = await Donate.find({});
    res.send(created_donations);
  }),
);

module.exports = userRouter;
