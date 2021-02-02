const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonateSchema = new Schema(
  {
    age: {
      type: Number,
      required: ['name is required', true],
    },
    country: {
      type: String,
      required: ['Mobile Number is required', true],
    },
    city: {
      type: String,
      required: ['email is required', true],
      unique: true,
    },
    address: {
      type: String,
      required: ['password is required', true],
    },
    postalcode: {
      type: Number,
      required: ['password is required', true],
    },
    bloodtype: {
      type: String,
      required: ['password is required', true],
    },
  },
  {
    timestamps: true,
  },
);

const Donate = mongoose.model('Donations', DonateSchema);

module.exports = Donate;
